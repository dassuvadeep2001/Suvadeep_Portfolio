import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import base_url, { end_url } from '../../../api/api_url';
import { useFormik } from 'formik';
import axios from 'axios';
import './reviewform.css';

function Reviewform() {
    let api = base_url + end_url.reviews;

    // Base64 conversion
    const getBase64 = file =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const validator = data => {
        let err = {};
        if (!data.fullname) err.fullname = 'required field';
        if (!data.address) err.address = 'required field';
        if (data.rating === 0) err.rating = 'required field';
        if (!data.review) err.review = 'required field';
        return err;
    };

    let formik = useFormik({
        initialValues: {
            fullname: '',
            address: '',
            rating: 0,
            review: '',
            image: ''
        },
        validate: validator,
        onSubmit: values => {
            axios.post(api, values)
                .then(response => {
                    alert('Review added Successfully');
                })
                .catch(error => {
                    alert('Failed to add Review');
                });
        }
    });

    const [hover, setHover] = useState(null);

    return (
        <section className='reviewform-section'>
            <div className="back mx-auto bg-white">
                <Container>
                    <Form onSubmit={formik.handleSubmit} className="form">
                        <h2 className="review mx-auto">..Share Your Experience With Us..</h2>

                        <Form.Group className="mb-2" controlId="fullname">
                            <Form.Label className="label1">
                                Fullname
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Fullname"
                                name="fullname"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.fullname && formik.errors.fullname && (
                                <p className="text-end text-danger">{formik.errors.fullname}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="address">
                            <Form.Label className="label1">
                                Address
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Address"
                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.address && formik.errors.address && (
                                <p className="text-end text-danger">{formik.errors.address}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="rating">
                            <Form.Label className="label2">
                                Rating
                            </Form.Label>
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <FaStar
                                        key={star}
                                        size={24}
                                        color={
                                            star <= (hover || formik.values.rating)
                                                ? '#ffc107'
                                                : '#e4e5e9'
                                        }
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(null)}
                                        onClick={() => formik.setFieldValue('rating', star)}
                                    />
                                ))}
                            </div>
                            {formik.touched.rating && formik.errors.rating && (
                                <p className="text-end text-danger">{formik.errors.rating}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="review">
                            <Form.Label className="label1">
                                Review
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your Review"
                                name="review"
                                value={formik.values.review}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.review && formik.errors.review && (
                                <p className="text-end text-danger">{formik.errors.review}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="image">
                            <Form.Label className="label1">Upload Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={event => {
                                    getBase64(event.target.files[0])
                                        .then(res => {
                                            formik.setFieldValue('image', res);
                                        })
                                        .catch(console.log);
                                }}
                            />
                        </Form.Group>
                        <div className="submit-button">
                            <Button
                                variant="outline-dark"
                                type="submit"
                                disabled={!(formik.dirty && formik.isValid)}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </section>
    );
}

export default Reviewform;
