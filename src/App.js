import './App.css'
import TopNavBar from './components/TopNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import BgVideo from './components/BgVideo'
import InfoGraphics from './components/Infographic.js'
import MapHolder from './components/MapHolder.js'
import Footer from './components/Footer.js'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App () {
  return (
    <div className='App'>
      <div id='section'>
        <TopNavBar />
      </div>
      <div id='section'>
        <div id='maps'>
          <MapHolder />
        </div>
      </div>
      <div id='section'>
        <div id='carouselSection'>
          <InfoGraphics />
        </div>
      </div>
      <div style={{ backgroundColor: '#212529' }}>
        <Footer />
      </div>
    </div>
  )
}

export default App
