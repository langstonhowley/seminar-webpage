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

class TopNavBar extends React.Component {
  render () {
    return (
      <div class='container-fluid'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
            <Nav>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default TopNavBar
