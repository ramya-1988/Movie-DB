import React from 'react';
import './App.css';
import MovieHots from './components/MovieHots';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiMenu } from "react-icons/tfi";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MovieNewReleases from './components/MovieNewReleases';


function App() {
 
  return (
   <Router>
    <div><Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <TfiMenu className='menu-icon'/> 
          <div className='navbar-logo-container'>
            <span className='navbar-logo-text'>Movie DB</span>
          </div>
        <Nav className='ms-auto'>
        <Navbar.Brand as={Link} to="/new">New Releases</Navbar.Brand>
        <Navbar.Brand as={Link} to="/hot">What's Hot</Navbar.Brand>
        </Nav>
        </Container>
     </Navbar>
    <div>
    <Routes>
     <Route path="/" element={<MovieNewReleases/>}/>
     <Route path="/new" element={<MovieNewReleases/>}/>
     <Route path="/hot" element={<MovieHots/>}/>
    </Routes>
    </div>
    <div><Navbar expand="lg" className='navbar-footer'>
    <div className='navbar-footer-container'>
            <span className='navbar-footer-text'>upGrad Frontend Hackathon</span>
          </div>
    </Navbar>
    </div>
  </div>
</Router>
  );
}
export default App;
