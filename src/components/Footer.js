import React from 'react'

class Footer extends React.Component {


    render() {
        return (
            <div style={{ padding: "25px", paddingBottom: "1px"}}>
                <h5 style={{color: "azure"}}>Data was collected from the following sources</h5>
                <p style={{ color: "azure" }}>ICUN <a href="https://www.iucnredlist.org/statistics">Redlist of Threatened Species</a>
                <br/>World Wildlife Fund <a href="https://livingplanet.panda.org/en-us/">Living Planet Index</a>
                <br/>Forest loss <a href="">Link</a></p>
                <p style={{ textAlign: "right", color: "azure" }}><span>&#169;</span>Copyright 2021</p>
            </div>
        )
    }
}
    export default Footer