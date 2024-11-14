import React, { useEffect, useState } from 'react'
import { Button, Container, Row ,Col, Form, Dropdown, DropdownButton, Collapse} from 'react-bootstrap'
import "./home.css"
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import base_url, { end_url } from '../../api/api_url';
import axios from 'axios';
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa';

const carouselItems = [
  {
    category: "Fruits & Vegetables",
    images: ["image/fruit1.jpg", "image/fruit2.jpg", "image/fruit3.jpg", "image/fruit4.jpg"],
  },
  {
    category: "Sweet & Desserts",
    images: ["image/sweet1.jpg", "image/sweet2.jpg", "image/sweet3.jpg", "image/sweet4.jpg"],
  },
  {
    category: "Meat & Poultry",
    images: ["image/meat1.jpg", "image/meat2.jpg", "image/meat3.jpg", "image/meat4.jpg"],
  },
  {
    category: "Beverages",
    images: ["image/beverages1.jpg", "image/beverages2.jpg", "image/beverages3.jpg", "image/beverages4.jpg"],
  },
  {
    category: "Dairy Food",
    images: ["image/dairy1.jpg", "image/dairy2.jpg", "image/dairy3.jpg", "image/dairy4.jpg"],
  },
  {
    category: "Sea Food",
    images: ["image/sea1.jpg", "image/sea2.jpg", "image/sea3.jpg", "image/sea4.jpg"],
  },
  {
    category: "Grains & Cereals",
    images: ["image/grain1.jpg", "image/grain2.jpg", "image/grain3.jpg", "image/grain4.jpg"],
  },
];

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
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (index) => {
      setActiveCard(activeCard === index ? null : index);
    }
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
    <div className="service">
    <p className="query-text mx-auto fs-5 d-flex justify-content-center mt-3 mb-2">Service</p>
    <h6 className="faq-title mx-auto fs-2 d-flex justify-content-center mb-3">What We Offer</h6>
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <Card className="ser-card bg-danger-subtle">
              <Card.Img variant="top" src="image/img2.webp" className="card-img" />
              <Card.Body>
                <Card.Title className="title text-center text-danger">Recipe Discovery & Browsing</Card.Title>
                <Button onClick={() => toggleCard(1)} id="servbtn" className='d-flex justify-content-center mx-auto'>
                  Learn More
                </Button>
                <Collapse in={activeCard === 1}>
                  <div className="mt-3">
                    <p>Recipe Discovery & Browsing offers a vast selection of recipes, enabling users to explore diverse cuisines, find new ideas, and easily locate dishes suited to their tastes and dietary needs.</p>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={4}>
            <Card className="ser-card bg-warning-subtle">
              <Card.Img variant="top" src="image/img3.webp" className="card-img" />
              <Card.Body>
                <Card.Title className="title text-center text-danger">Recipe Creation & Storage</Card.Title>
                <Button onClick={() => toggleCard(2)} id="servbtn" className='d-flex justify-content-center mx-auto'>
                  Learn More
                </Button>
                <Collapse in={activeCard === 2}>
                  <div className="mt-3">
                    <p>Recipe Creation & Storage allows users to craft personalized recipes and save them securely. This feature makes organizing, retrieving, and sharing culinary creations simple, providing a personalized cooking experience for everyone.</p>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={4}>
            <Card className="ser-card bg-info-subtle">
              <Card.Img variant="top" src="image/img4.jpg" className="card-img" />
              <Card.Body>
                <Card.Title className="title text-center text-danger">Recipe Reviews & Rating</Card.Title>
                <Button onClick={() => toggleCard(3)} id="servbtn" className='d-flex justify-content-center mx-auto'>
                  Learn More
                </Button>
                <Collapse in={activeCard === 3}>
                  <div className="mt-3">
                    <p>Recipe Reviews & Rating allows users to share feedback on recipes, rate their experiences, and explore community insights, helping others make informed choices and improve their culinary skills.</p>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
{/* food features section */}
<div className='recipe-features'>
<p className="query-text mx-auto fs-5 d-flex justify-content-center mt-3 mb-2">Recipe Features</p>
<h6 className="faq-title mx-auto fs-2 d-flex justify-content-center mb-3">Recipe Category We Offer Our Viewers</h6>
<Container>
      <Carousel interval={3000} className="multi-item-carousel">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-content">
              {item.images.map((src, idx) => (
                <div className="col-3" key={idx}>
                  <img src={src} alt={`${item.category} ${idx + 1}`} />
                </div>
              ))}
            </div>
            <Carousel.Caption>
              <h3 className="text-success">{item.category}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    </div>
{/* about section */}

<Container className="why-choose-container">
  <Row>
    <Col sm={12} md={6} className="text-content">
    <p className="query-text mx-auto fs-5 d-flex justify-content-center mt-3 mb-2">About Us</p>
    <h6 className="faq-title mx-auto fs-2 d-flex justify-content-center mb-3">Why Choose CookBook</h6>
      <p className="section-paragraph">
        See some unique features and benefits of us. Whether you're a seasoned chef or just starting your kitchen journey, COOKBOOK is here to inspire and guide you with carefully curated recipes from around the globe. Explore, create, and share your passion for food, all in one place. Know more about us!
      </p>
      <Button variant="outline-dark" className="about-button d-flex justify-content-center mx-auto">
        <Link to="/about" className="about-link">About CookBook</Link>
      </Button>
    </Col>
    <Col sm={12} md={6} className="image-content">
      <img src="image/img6.webp" alt="Why Choose Cookbook" className="about-image" />
    </Col>
  </Row>
</Container>

{/* get started section */}
<section className="get-started">
    <Container>
      <Row>
        <Col sm={12} md={6} className="get-image-container">
          <img src="image/img7.webp" alt="CookBook" className="get-image" />
        </Col>
        <Col sm={12} md={6} className="get-text-container">
          <h4 className="get-title">CookBook</h4>
          <p className="sub-p">Your ultimate kitchen companion.</p>
          <p className="sub-pp">
            Tried, tested & loved by thousands of home cooks. CookBook is free to use*, see what all the fuss is about!
            <br />
            * Click the Get Started button to sign in and venture with us.
          </p>
          <Button variant="outline-dark" type="submit" id="button" className="get-started-btn1">
            <Link to="/start" className="link">Get Started</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  </section>

{/* faq section */}
<div className="faq-section">
  <Container>
  <p className="query-text mx-auto fs-5 d-flex justify-content-center mt-3 mb-2">Query</p>
  <h5 className="faq-title mx-auto fs-2 d-flex justify-content-center mb-4">Frequently Asked Questions</h5>
  {state.map((value, index) => (
    <div key={index} className="faq">
      <h5 className="faq-question" onClick={() => handleClick(index)}>
        Q. {value.contact}
        <span className="faq-icon">{activeIndex === index ? <FaAngleDown /> : <FaAngleRight />}</span>
      </h5>
      {activeIndex === index && <p className="faq-answer">A. {value.answer}</p>}
    </div>
  ))}
  </Container>
</div>
</>
  )
}

export default Home