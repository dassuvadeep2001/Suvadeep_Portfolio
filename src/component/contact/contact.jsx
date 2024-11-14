import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import base_url, { end_url } from '../../api/api_url';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./contact.css";

function Contact() {
    const api = base_url + end_url.contact;
    console.log("api", api);

    const validator = (data) => {
        let err = {};
        if (!data.contact) err.contact = "required field";
        return err;
    };

    const formik = useFormik({
        initialValues: {
            query: ""
        },
        validate: validator,
        onSubmit: (values) => {
            console.log("Submitted query", values);
            axios.post(api, values)
                .then(response => {
                    console.log("response from api:", response.data);
                    alert("Query sent Successfully");
                })
                .catch(error => {
                    console.log("error", error);
                    alert("Failed to send Query");
                });
        }
    });

    return (
        <section className="con-sec">
            <h4 className="contact-h">Contact Us</h4>
            <div className="con-part">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="mt-1">
                            <h4 className="loc">Our Location</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992675!2d72.74109869670252!3d19.082522318551456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c8e837e3b%3A0x6e2736460a63b57f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600769644409!5m2!1sen!2sin"
                                className="map"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            />
                        </Col>
                        <Col sm={12} md={6} className="mt-1">
                            <h4 className="q">Do you have any Query?<br />Throw it to us...</h4>
                            <Form onSubmit={formik.handleSubmit} className="query-form">
                                <Form.Group controlId="contact">
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter your query"
                                        name="contact"
                                        value={formik.values.contact}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.contact && formik.errors.contact && (
                                        <p className="text-end text-danger">{formik.errors.contact}</p>
                                    )}
                                </Form.Group>
                                <div className="submit-btn">
                                    <Button variant="outline-dark" type="submit" disabled={!(formik.dirty && formik.isValid)}>
                                        Send
                                    </Button>
                                </div>
                            </Form>
                            <h5 className="contact-social">You can connect with us on Social Platforms</h5>
                            <div className="social-icons">
                                <FaFacebook size={30} color="brown" />
                                <FaInstagram size={30} color="brown" />
                                <FaTwitter size={30} color="brown" />
                                <FaYoutube size={30} color="brown" />
                            </div>
                            <h5 className="email">or, Email us directly <span>team@cookbookmanager.com</span></h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
