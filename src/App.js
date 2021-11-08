import logo from './logo.svg'
import './App.css'
import TopNavBar from './components/TopNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MapChart from './components/MapChart'
import BgVideo from './components/BgVideo'
import InfoGraphics from './components/Infographic.js'
import MapHolder from './components/MapHolder.js'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip'

import './App.css'

function App () {
  const [content, setContent] = useState('')
  return (
    <div className='App'>
          <TopNavBar />
          <div id='mapSection'>
              <div id='maps'>
                <MapHolder/>
              </div>
          </div>
          <div id='mapSection'>
              <InfoGraphics />
          </div>
    </div>
  )
}

export default App
