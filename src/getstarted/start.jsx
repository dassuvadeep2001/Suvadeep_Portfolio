import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './start.css';

function Start() {
  return (
    <>
      <section className='welcome-section'>
        <Container>
          <Row>
            <Col sm={12} md={6} className='text-col'>
              <h3 className='welcome-title'>Welcome Back to COOKBOOK!</h3>
              <p className='welcome-text'>
                We're so excited to have you back in the kitchen with us! Sign in to your COOKBOOK account and continue your culinary journey—whether it's discovering new recipes, managing your favorites, or sharing your delicious creations. Let's make cooking fun and flavorful together!
              </p>
              <Button variant='outline-success' className='welcome-button d-flex justify-content-center mx-auto my-3'>
                <Link to="/login" className='link'>Sign In</Link>
              </Button>
            </Col>
            <Col sm={12} md={6} className='image-col'>
              <img src="image/signin.jpg" alt="Sign In" className='responsive-image'/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='signup-section'>
        <Container>
          <Row>
            <Col sm={12} md={6} className='image-col'>
              <img src="image/signup.png" alt="Sign Up" className='responsive-image'/>
            </Col>
            <Col sm={12} md={6} className='text-col'>
              <h3 className='signup-title'>Create a CookBook account</h3>
              <p className='signup-text'>
                Sign up to CookBook and give it a go for free with up to 20 recipes & 5 recipe photo scans. Your recipes will be saved safely and securely in our Cloud Kitchen, ready to sync across all of your devices!
              </p>
              <Button variant='outline-info' className='signup-button d-flex justify-content-center mx-auto my-3'>
                <Link to="/registration" className='link'>Sign Up</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Start;
