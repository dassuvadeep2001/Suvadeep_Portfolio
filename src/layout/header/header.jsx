import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./header.css"
import { FaUtensils } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const [userId, setUserId] = useState(null);
let navigate=useNavigate()
  useEffect(() => {
    
    // Get user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleProfileClick = () => {
    if (userId===null) {
      // Navigate to the login page if userId is not present
      navigate('/login');
    } else {
       // Navigate to the profile page if userId is present
       navigate(`/profile/${userId}`);
    }
  };
  return (
    <>
      <Navbar expand="lg" id='nav1'>
        <Container>
          <Navbar.Brand href="#" className='nav1-head mx-auto text-warning'>The CookBook App is brought to you by CookBook Co. Pty Ltd.</Navbar.Brand>
        </Container>
      </Navbar >
    <Navbar expand="lg" id='nav2'>
      <Container>
        <Navbar.Brand className='logo fs-3 text-white'> <span><FaUtensils size={35} color="white" /></span> CookBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={ Link } to="" id='menu'>Home</Nav.Link>
            <Nav.Link as={ Link } to="category" id='menu'>Our Recipes</Nav.Link>
            <Nav.Link as={ Link } to="review" id='menu'>Testimonial</Nav.Link>
            <NavDropdown title="User" id="dropdown">
              <NavDropdown.Item as={ Link } to="/login">
                Sign-In
              </NavDropdown.Item >
              <NavDropdown.Item as={ Link } to="/registration">Sign-Up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleProfileClick}>
                Profile
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={ Link } to="contact" id='menu'>Contact Us</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Button variant='outline-light' type="submit" id='btn'><Link className='link1' to="/start">Get Started</Link></Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header