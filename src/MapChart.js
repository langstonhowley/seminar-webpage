import React, { useState, useEffect, memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { csv } from "d3-fetch";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const marks = [
    {
        value: 10,
        label: '1990',
    },
    {
        value: 40,
        label: '2000',
    },
    {
        value: 70,
        label: '2010',
    },
    {
        value: 85,
        label: '2015',
    },
    {
        value: 100,
        label: '2020',
    },
];

function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}

const MapChart = ({ setTooltipContent }) => {

    const [deforestation, setDeforestation] = useState([]);
    const [estimates, setEstimates] = useState([]);
    const [animals, setAnimals] = useState([]);
    const [plants, setPlants] = useState([]);
    const [fungi, setFungi] = useState([]);
    const [chromists, setChromists] = useState([]);
    const [year, setYear] = useState([`2020`]);

    useEffect(() => {
        csv("/annual-change-forest-area.csv").then(deforestation => {
            setDeforestation(deforestation);
        });
        csv("/living-planet-index-by-region.csv").then(estimates => {
            setEstimates(estimates);
        });
        csv("/redlist-animals-by-country.csv").then(animals => {
            setAnimals(animals);
        });
        csv("/redlist-plants-by-country.csv").then(plants => {
            setPlants(plants);
        });
        csv("/redlist-fungi-by-country.csv").then(fungi => {
            setFungi(fungi);
        });
        csv("/redlist-chromists-by-country.csv").then(chromists => {
            setChromists(chromists);
        });
    }, []);

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
                <ZoomableGroup
                    translateExtent={[
                        [-75, 30],
                        [950, 600]
                    ]}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const def = deforestation.find(s => s.ISO3 === geo.properties.ISO_A3 && s.Year == year);
                                const est = estimates.find(s => s.Region === geo.properties.CONTINENT);
                                const animal = animals.find(s => s.Name === geo.properties.NAME);
                                const plant = plants.find(s => s.Name === geo.properties.NAME);
                                const fungus = fungi.find(s => s.Name === geo.properties.NAME);
                                const chromist = chromists.find(s => s.Name === geo.properties.NAME);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const { NAME } = geo.properties;
                                            (def && est && animal && plant && fungus && chromist)
                                                ? setTooltipContent(`${NAME}          <br />
                                                                      ----------------<br />
                                                                      Species lost: ` + (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"])) + `<br />
                                                                      Endangered Species: ` + ((parseInt(animal["Subtotal(threatened spp.)"]) + parseInt(plant["Subtotal(threatened spp.)"]) + parseInt(fungus["Subtotal(threatened spp.)"]) + parseInt(chromist["Subtotal(threatened spp.)"])) - (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"]))) + `<br />
                                                                      Estimated Biodiversity Loss Over Time: ${est["Percent"]}<br />
                                                                      Deforestation: ${def["Net-forest-conversion"]} hectares
                                                `)
                                                : (!def && est && animal && plant && fungus && chromist && est["Percent"] != `N/A`)
                                                    ? setTooltipContent(`${NAME}          <br />
                                                                      ----------------<br />
                                                                      Species lost: ` + (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"])) + `<br />
                                                                      Endangered Species: ` + ((parseInt(animal["Subtotal(threatened spp.)"]) + parseInt(plant["Subtotal(threatened spp.)"]) + parseInt(fungus["Subtotal(threatened spp.)"]) + parseInt(chromist["Subtotal(threatened spp.)"])) - (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"]))) + `<br />
                                                                      Estimated Biodiversity Loss Over Time: ${est["Percent"]}<br />
                                                `)
                                                    : (!def && est && animal && plant && fungus && chromist)
                                                        ? setTooltipContent(`${NAME}          <br />
                                                                      ----------------<br />
                                                                      Species lost: ` + (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"])) + `<br />
                                                                      Endangered Species: ` + ((parseInt(animal["Subtotal(threatened spp.)"]) + parseInt(plant["Subtotal(threatened spp.)"]) + parseInt(fungus["Subtotal(threatened spp.)"]) + parseInt(chromist["Subtotal(threatened spp.)"])) - (parseInt(animal["Subtotal-(EX+EW)"]) + parseInt(plant["Subtotal-(EX+EW)"]) + parseInt(fungus["Subtotal-(EX+EW)"]) + parseInt(chromist["Subtotal-(EX+EW)"]))) + `<br />
                                                `)
                                                        : (def && est)
                                                            ? setTooltipContent(`${NAME}          <br />
                                                                      ----------------<br />
                                                                      Estimated Biodiversity Loss Over Time: ${est["Percent"]}<br />
                                                                      Deforestation: ${def["Net-forest-conversion"]} hectares
                                                `)
                                                            : (!def && est && est["Percent"] == `N/A`)
                                                                ? setTooltipContent(`
                                                                      No data found for ${NAME} in ` + year
                                                                )
                                                                : (!def && est)
                                                                    ? setTooltipContent(`${NAME}          <br />
                                                                      ----------------<br />
                                                                      Estimated Biodiversity Loss Over Time: ${est["Percent"]}
                                                `)
                                                                    : setTooltipContent(`No Data Found for ${NAME} in ` + year);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            default: {
                                                fill: "#D6D6DA",
                                                outline: "#000000",
                                            },
                                            hover: {
                                                fill: "#F53",
                                                outline: "#000000"
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "#000000"
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Box sx={{ width: 750 }, { ml: 10 }}>
                <Slider
                    onChange={(event, value) => setYear((((value - 10) / 3) + 1990))}
                    track={false}
                    aria-label="Restricted values"
                    defaultValue={100}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    marks={marks}
                />
            </Box>
        </>
    );
};

export default memo(MapChart);