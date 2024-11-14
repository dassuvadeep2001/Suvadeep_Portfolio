import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button, Row, Col } from 'react-bootstrap';
import { FaUtensils } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleProfileClick = () => {
    if (!userId) {
      navigate('/login');
    } else {
      navigate(`/profile/${userId}`);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="nav1">
        <Container>
          <h2 id="nav1-head" className='d-flex justify-content-center mx-auto'>
            The CookBook App is brought to you by CookBook Co. Pvt Ltd.
          </h2>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="nav2">
        <Container>
          <h2 className="logo">
            <FaUtensils className="logo-icon" /> CookBook
          </h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-menu">
              <Nav.Link as={Link} to="/" id="menu-item">Home</Nav.Link>
              <Nav.Link as={Link} to="about" id="menu-item">About Us</Nav.Link>
              <Nav.Link as={Link} to="category" id="menu-item">Our Recipes</Nav.Link>
              <Nav.Link as={Link} to="review" id="menu-item">Testimonial</Nav.Link>
              <NavDropdown title="User" id="user-dropdown">
                <NavDropdown.Item as={Link} to="/login">Sign-In</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registration">Sign-Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleProfileClick}>Profile</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="contact" id="menu-item">Contact Us</Nav.Link>
            </Nav>
            <Form className="get-started-form">
              <Row>
                <Col xs="auto">
                  <Button type="submit" id="get-started-btn">
                    <Link className="link-start" to="/start">Get Started</Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
