import React, { useEffect, useState } from 'react'
import { Button, Container, Row ,Col, Form, Dropdown, DropdownButton} from 'react-bootstrap'
import "./home.css"
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import base_url, { end_url } from '../../api/api_url';
import axios from 'axios';
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa';

function Home() {
  let api=base_url+end_url.contact;
    console.log("api",api);
    
    let[state,setState]=useState([]);
    let [activeIndex, setActiveIndex] = useState(null);

    const getQues=()=>{
        axios.get(api)
        .then(res=>{
            console.log("questions",res.data);
            setState(res.data)
        })
        .catch(err=>{
            console.log("Axios error",err);
        })
    }
    useEffect(()=>{
        getQues()
    },[setState,api])

    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index); // Toggle open/close
    };
  return (
    <>
    {/* banner section */}
    <div className="video-container">
    <video className="background-video" autoPlay loop muted>
        <source src="video/cook3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
{/* service section */}

<div className='service'>
  <Container>
    <Row>
      <Col sm={6} md={4}>
      <Card style={{ width: '20rem' }} className=' ser-card bg-danger-subtle'>
      <Card.Img variant="top" src="image/img2.webp" style={{height:"300px"}} className='px-3 py-3'/>
      <Card.Body>
        <Card.Title className='title mx-auto d-flex justify-content-center text-danger'>Recipe Discovery & Browsing</Card.Title>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={6} md={4}>
      <Card style={{ width: '20rem' }} className=' ser-card bg-warning-subtle' >
      <Card.Img variant="top" src="image/img3.webp" style={{height:"300px"}} className='px-3 py-3'/>
      <Card.Body>
        <Card.Title className='title mx-auto d-flex justify-content-center text-danger'>Recipe Creation & Storage</Card.Title>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={6} md={4}>
      <Card style={{ width: '20rem' }} className=' ser-card bg-info-subtle'>
      <Card.Img variant="top" src="image/img4.jpg" style={{height:"300px"}} className='px-4 py-4'/>
      <Card.Body>
        <Card.Title className='title mx-auto d-flex justify-content-center text-danger'>Recipe Reviews & Rating</Card.Title>
      </Card.Body>
    </Card>
      </Col>
    </Row>
  </Container>
</div>
{/* food features section */}
<div>
  <h3 className='features mx-auto d-flex justify-content-center my-2 text-danger'>Features of our Recipes</h3>
<Carousel interval={3000} className="multi-item-carousel">
        <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/fruit1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/fruit2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/fruit3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/fruit4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Fruits & Vegetables</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sweet1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sweet2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sweet3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sweet4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Sweet & Deserts</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/meat1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/meat2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/meat3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/meat4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Meat & Poultry</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/beverages1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/beverages2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/beverages3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/beverages4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Beverages</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/dairy1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/dairy2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/dairy3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/dairy4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Dairy Food</h3>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sea1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sea2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sea3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/sea4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Sea Food</h3>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/grain1.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/grain2.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/grain3.jpg"
              />
            </div>
            <div className="col-3">
              <img
                className="d-block w-100 "
                src="image/grain4.jpg"
              />
            </div>
          </div>
          <Carousel.Caption>
          <h3 className='text-success'>Grains & Cereals</h3>
        </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
</div>

{/* about section */}

<div>
<Container>
        <Row>
            <Col sm={12} md={6} className='w-50 mt-5 pe-5'>
<h4 className='text-danger mx-auto d-flex justify-content-center fs-4 '>Why Choose "COOKBOOK"</h4>
<p className='my-3 fs-5'>See some unique features and benefits of us, Whether you're a seasoned chef or just starting your kitchen journey, COOKBOOK is here to inspire and guide you with carefully curated recipes from around the globe. Explore, create, and share your passion for food, all in one place. Know to more about us!!!!</p>
<Button variant='outline-dark' type="submit" id='button' className='fs-5 mx-auto d-flex justify-content-center'><Link to="/about" className='link'>About CookBook</Link></Button>
</Col>
<Col sm={12} md={6} className='w-50 mt-5 pe-5'>
<img src="image/img6.webp" alt=""  style={{height:'300px'}}/>
</Col>
</Row>
</Container>

{/* get started section */}

</div>
<section className='get'>
<Container>
        <Row>
            <Col sm={12} md={6} className='w-50 mt-5 pe-5'>
            <img src="image/img7.webp" alt=""  style={{height:'500px'}}/>
</Col>
<Col sm={12} md={6} className='w-50 mt-5 pe-5'>
<h4 className='text-white'>CookBook</h4>
<p className='sub-p my-1 text-white'>Your ultimate kitchen companion.</p>
<p className='sub-pp text-danger-emphasis'>Tried, tested & loved by thousands of home cooks. CookBook is free to use*, see what all the fuss is about!
<br />* Click the Get Started button to sign in and venture with us.</p>
<Button variant='outline-dark' type="submit" id='button' className='fs-5 mx-auto d-flex justify-content-center my-5'><Link to="/start" className='link'>Get Started</Link></Button>
</Col>
</Row>
</Container>
</section>
{/* faq section */}
<div className='faq-section mb-5'>
  <p className='text-success mx-auto fs-5 d-flex justify-content-center mt-5 mb-2'>Query</p>
  <h5 className='mx-auto fs-2 d-flex justify-content-center mb-5'>Frequently Asked questions</h5>
      {state.map((value, index) => (
        <div key={index} className='faq mx-auto'>
          <h5 className="fs-6 pt-1" onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
            Q. {value.contact} 
            <span style={{ marginLeft: '10px' }}>{activeIndex === index ? <FaAngleDown /> : <FaAngleRight />}</span>
          </h5>
          {activeIndex === index && (
            <p>A. {value.answer}</p>
          )}
        </div>
      ))}
    </div>
</>
  )
}

export default Home