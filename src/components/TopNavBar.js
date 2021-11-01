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

class TopNavBar extends React.Component {
  render () {
    return (
      <div class='header-nav'>
        <div class='container-fluid'>
          <div class='navbar transparent navbar-inverse navbar-fixed-top'>
            <Navbar bg='dark' variant='dark' fixed='top'>
              <Container>
                <Navbar.Brand href='#home'>Habitat Loss</Navbar.Brand>
                <Nav>
                  <Nav.Link href='#home'>Map</Nav.Link>
                  <Nav.Link href='#features'>Visualizations</Nav.Link>
                  <Nav.Link href='#pricing'>Deets</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
        <div class='container-fluid'>
          <VideoBg>
            <VideoBg.Source src={bgvideo} type='video/ogg' />
          </VideoBg>
        </div>
        <div className='bgoverlay'>
          <div className='form'>
            <h1>Sup Dawg</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNavBar