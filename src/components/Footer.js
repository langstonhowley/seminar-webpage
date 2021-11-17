import React from 'react'
import longIcon from './long_logo.png'
import '../App.css'

class Footer extends React.Component {
  render () {
    return (
      <div style={{ padding: '25px', paddingBottom: '1px', fontSize: '12px' }}>
        <h5 style={{ color: 'azure', fontSize: '14px' }}>
          Data was collected from the following sources
        </h5>
        <p style={{ color: 'azure' }}>
          <a href='https://www.iucnredlist.org/statistics'>
            ICUN Redlist of Threatened Species
          </a>
          <br />
          <a href='https://livingplanet.panda.org/en-us/'>
            World Wildlife Fund Living Planet Index
          </a>
          <br />
          <a href='https://ourworldindata.org/deforestation'>
            United Nations Food and Agricultural Organization forestry data
          </a>
        </p>
        <div>
          <img
            alt=''
            src={longIcon}
            width='135'
            height='45'
            className='d-inline-block align-top'
          />
          <p style={{ textAlign: 'right', color: 'azure' }}>
            <span>&#169;</span>Copyright 2021
          </p>
        </div>
      </div>
    )
  }
}
export default Footer
