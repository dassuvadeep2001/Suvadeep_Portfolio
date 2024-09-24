import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Start() {
  return (
    <>
    <section className='mt-5'>
     <Container>
        <Row>
            <Col sm={12} md={6} className='w-50 mt-5 ps-5'>
            <h3 className='mx-auto d-flex justify-content-center mb-3 text-success fs-1'>Welcome Back to COOKBOOK!</h3>
            <p className='fs-5 text-secondary mx-auto'>We're so excited to have you back in the kitchen with us! Sign in to your COOKBOOK account and continue your culinary journey—whether it's discovering new recipes, managing your favorites, or sharing your delicious creations. Let's make cooking fun and flavorful together!
            </p>
            <Button variant='outline-success' type="submit" id='button' className='fs-5 mx-auto d-flex justify-content-center my-5'><Link to="/login" className='link'>Sign In</Link></Button>
            </Col>
            <Col sm={12} md={6} className='w-50 mx-auto ps-5'>
            <img src="image/signin.jpg" alt="" style={{height:"400px"}}/>
            </Col>
        </Row>
    </Container>
 </section>
 <section>
     <Container>
        <Row>
            <Col sm={12} md={6} className='w-50 my-5 pe-5'>
            <img src="image/signup.png" alt="" style={{height:"300px"}}/>
            </Col>
            <Col sm={12} md={6} className='w-50 mt-5'>
            <h3 className='mx-auto d-flex justify-content-center mb-3 text-info fs-1'>Create a CookBook account</h3>
            <p className='fs-5 text-secondary mx-auto'>Sign up to CookBook and give it a go for free with up to 20 recipes & 5 recipe photo scans. <br/>Your recipes will be saved safely and securely in our Cloud Kitchen, ready to sync across all of your devices!
            </p>
            <Button variant='outline-info' type="submit" id='button' className='fs-5 mx-auto d-flex justify-content-center my-5'><Link to="/registration" className='link'>Sign Up</Link></Button>
            </Col>
        </Row>
    </Container>
 </section>
 </>
  )
}

export default Start