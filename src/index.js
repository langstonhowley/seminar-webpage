import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> Ronan
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
<<<<<<< HEAD
=======
>>>>>>> 038141a96ad1df1c29fcfa19e401e0b5e62f33a4
>>>>>>> Ronan
