import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Reviewform from './reviewform/reviewform'
import base_url, { end_url } from '../../api/api_url';
import axios from 'axios';
import "./review.css"
import { FaStar } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

function Review() {
    let api=base_url+end_url.reviews;
    console.log("api",api);
    let[state,setState]=useState([]);
    const getReview=()=>{
        axios.get(api)
        .then(res=>{
            console.log("review",res.data);
            setState(res.data)
        })
        .catch(err=>{
            console.log("Axios error",err);
        })
    }
    useEffect(()=>{
        getReview()
    },[setState,api])
//rating
const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => (
        <FaStar
            key={index} 
            size={24} 
            color={index < rating ? '#ffc107' : '#e4e5e9'} 
        />
    ));
};
  return (
    <section className='sec'>
        <h5 className='mx-auto d-flex justify-content-center text-success pt-4'>Testimonials</h5>
         <h3 className='heading'>Feel good reviews from our customers</h3>
         <p className='paragraph mx-auto d-flex justify-content-center'>"At COOKBOOK, our review page is where flavor meets feedback! Here, passionate food lovers share their experiences, helping others discover the perfect recipe. Your voice makes every dish better!"</p>
    <Container>
        <Row className='mx-1'>
            <Col sm={12} md={6} className='w-50 pe-5'>
           <div className='caro bg-white'>
            <Carousel data-bs-theme="dark" className='carousel'>
                {state.map((value, index) => (
                    <Carousel.Item key={index}>
                        <div className='image-container'>
                        <img
                            className="img"
                            src={value.image}
                            alt={`Slide ${index}`}
                        />
                        </div>
                        <Carousel.Caption className='caption'>
                            <h2>{value.fullname}</h2>
                            <h4>{value.address}</h4>
                            <div style={{ display: 'flex', justifyContent: 'center' }} className='star my-2'>
                                    {renderStars(value.rating)}
                                </div>
                            <h6>{value.review}</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
         </div>
         </Col>
         <Col sm={12} md={6} className='w-50 pe-5 mt-4'>
         <Reviewform />
         </Col>
         </Row>
         </Container>
</section>


  )
}

export default Review