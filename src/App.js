import logo from './logo.svg'
import './App.css'
import TopNavBar from './components/TopNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MapChart from './components/MapChart'
import BgVideo from './components/BgVideo'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip'

import './App.css'

function App () {
  const [content, setContent] = useState('')
  return (
    <div className='App'>
          <TopNavBar />
          <div id='map-section'>
              <div id='map'>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip html={true}>{content}</ReactTooltip>
              </div>
          </div>
    </div>
  )
}

export default App
