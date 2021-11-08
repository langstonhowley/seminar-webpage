import { useState } from "react"
import MapChart from "./MapChart"
import ReactTooltip from 'react-tooltip'


function MapHolder() {
    const [content, setContent] = useState('')
        return (
            <div>
            <div>
                <div>
                <AddHeader /> 
                </div>
            </div>
            <div> 
                <MapChart setTooltipContent={setContent} />
                 <ReactTooltip html={true}>{content}</ReactTooltip>
                 <footer>
                     <p>This shows the slider.</p>
                 </footer>
            </div>
            </div>
        )    
    }


    function AddHeader() { 
        return ( 
          <h1> this is some text </h1>
        )
      }
export default MapHolder