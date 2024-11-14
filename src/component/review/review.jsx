import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Reviewform from './reviewform/reviewform';
import base_url, { end_url } from '../../api/api_url';
import axios from 'axios';
import "./review.css";
import { FaStar } from 'react-icons/fa';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Review() {
    let api = base_url + end_url.reviews;
    console.log("api", api);
    let [state, setState] = useState([]);

    const getReview = () => {
        axios.get(api)
            .then(res => {
                console.log("review", res.data);
                setState(res.data);
            })
            .catch(err => {
                console.log("Axios error", err);
            });
    };

    useEffect(() => {
        getReview();
    }, [setState, api]);

    // Rating stars rendering function
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
        <section className="review-section">
            <h5 className="title-subheading">Testimonials</h5>
            <h3 className="title-heading">Feel good reviews from our customers</h3>
            <p className="description">
                "At COOKBOOK, our review page is where flavor meets feedback! Here, passionate food lovers share their experiences, helping others discover the perfect recipe. Your voice makes every dish better!"
            </p>
            <Container>
                <Row className="review-content">
                    <Col sm={12} md={6} className="carousel-container">
                        <Carousel className="carousel">
                            {state.map((value, index) => (
                                <Carousel.Item key={index} className='carousel-item'>
                                   <Card className="text-center p-4" style={{ width: "100%", backgroundColor: 'transparent', border: 'none' }}>
           <h4 className='mb-5 text-success'>Our Valuable Customer Review</h4>
            <div className="image-container mx-auto mb-3">
                <Card.Img
                    variant="top"
                    src={value.image}
                    className="rounded-circle"
                    style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                />
            </div>
            <Card.Body>
                <Card.Title className="mb-2 text-danger" style={{ fontSize: '2em' }}>
                    {value.fullname}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1.5em' }}>
                    {value.address}
                </Card.Subtitle>
                <div className="rating-stars mb-2">
                    {renderStars(value.rating)}
                </div>
                <Card.Text style={{ fontSize: '1em', color: '#666' }}>
                    {value.review}
                </Card.Text>
            </Card.Body>
        </Card>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col sm={12} md={6} className="form-container">
                        <Reviewform />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Review;
