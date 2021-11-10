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
                <div style={{paddingTop: "3%"}}>
                    <h1>Wildlife loss map</h1>
                    <h3>This map shows the relationship between habitat destruction and biodiversity loss.</h3>
                    <h6>Put your cursor over a country and you can see info on how much wildlife has been damaged.</h6>
                    <h6>The timeline will change the info by year</h6>
                </div>
            </div>
            <div style={{ paddingBottom: "40px" }}>
                <div style={{ width: "100%" }}>
                <MapChart setTooltipContent={setContent} />
                    <ReactTooltip html={true}>{content}</ReactTooltip>
                    </div>
                <footer>
                    <h3 style={{ paddingTop: 20 }}>Map Color Legend</h3>
                    <h6>Each color represents a percentage of species in a country that are endangered or extinct.</h6>
                    <h6>The darker the color the worse a country has been affected.</h6>
                    <svg height="12" width="1600">
                        <line x1="0" y1="0" x2="1600" y2="0" style={{ stroke: '#000000', strokeWidth: 4 }} />
                    </svg>
                    <Row>
                        <Col><Row xs="auto"><Col><h6>0-20%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#a0e295"}}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>21-30%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#8ec984" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>31-40%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#7db073" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>41-50%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#6b9763" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>51-60%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#597e53" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>61-70%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#476442" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>71-80%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#354b32" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>81-90%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#243221" }}></div></Col></Row></Col>
                        <Col><Row xs="auto"><Col><h6>90+%</h6></Col><Col><div id="map-legend-box" style={{ backgroundColor: "#121910" }}></div></Col></Row></Col>
                    </Row>
                </footer>
            </div>
        </div>
    )
}
export default MapHolder