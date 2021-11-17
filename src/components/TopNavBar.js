import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import VideoBg from 'reactjs-videobg'
import bgvideo from './video.mp4'
import '../App.css'
import bioIon from './icon.png'
import longIcon from './long_logo.png'

class TopNavBar extends React.Component {
  render () {
    return (
      <section id='home'>
        <div class='container-fluid'>
          <div class='navbar transparent navbar-fixed-top'>
            <Navbar bg='dark' variant='dark' fixed='top'>
              <Container>
                <Navbar.Brand href='#home'>
                  <img
                    alt=''
                    src={bioIon}
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                  />
                  &nbsp; Biodiversity Loss
                </Navbar.Brand>
                <Nav>
                  <Nav.Link href='#map'>Map</Nav.Link>
                  <Nav.Link href='#why'>Why</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>

          <div class='container-fluid'>
            <VideoBg>
              <VideoBg.Source src={bgvideo} type='video/ogg' />
            </VideoBg>
          </div>
          <div className='bgoverlay'>
            <div className='form'>
              <div>
                <h1
                  style={{ fontSize: 70, textAlign: 'center', color: 'white' }}
                >
                  The World is Losing Wildlife
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TopNavBar
