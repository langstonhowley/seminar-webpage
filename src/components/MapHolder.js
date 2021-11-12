import { useState } from "react"
import MapChart from "./MapChart"
import ReactTooltip from 'react-tooltip'
import { Row, Col } from "react-bootstrap"
import '../App.css'


function MapHolder() {
    const [content, setContent] = useState('')
    return (
        <div>
            <div>
                <div style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                    <h1 id="text">Wildlife loss map</h1>
                    <h3 id="text">This map shows the relationship between habitat destruction and biodiversity loss.</h3>
                    <h6 id="text">Put your cursor over a country and you can see info on how much wildlife has been damaged.</h6>
                    <h6 id="text">The timeline will change the info by year</h6>
                </div>
                <footer style={{ paddingBottom: "1%" }}>
                    <h3 id="text" style={{ paddingTop: 20 }}>Map Color Legend</h3>
                    <h6 id="text">Each color represents the percentage of species in a country that are endangered or have gone extinct.</h6>
                    <h6 id="text">The darker the color the worse a country has been affected.</h6>
                    <svg height="12" width="1642">
                        <line x1="0" y1="0" x2="1642" y2="0" style={{ stroke: "lightgrey", strokeWidth: 4 }} />
                    </svg>
                    <Row>
                        <Col><Row xs="auto"><Col><h6 id="text">~0-3%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#a0e295" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~3-6%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#8ec984" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~6-8%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#7db073" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~8-11%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#6b9763" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~11-14%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#597e53" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~14-17%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#476442" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~17-19%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#354b32" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">~19-22%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#243221" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6 id="text">22-25+%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#121910" }}></div></Col></Row></Col>
                    </Row>
                </footer>
            </div>
            <div style={{ paddingBottom: "40px" }}>
                <div style={{ width: "100%", backgroundColor: "#89CFF0", border: "solid", borderWidth: "5px", borderColor: "#ebeeee" }}>
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip html={true}>{content}</ReactTooltip>
                </div>
            </div>
        </div>
    )
}
export default MapHolder