import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./App.css";

import MapChart from "./MapChart";

function App() {
    const [content, setContent] = useState("");
    return (
        <><div id="map">
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip html={true}>{content}</ReactTooltip>
        </div>
            <div>
                <p id="infographic">This is the infographic section</p>
            </div>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
