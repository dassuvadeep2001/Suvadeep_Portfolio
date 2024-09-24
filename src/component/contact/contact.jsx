import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import base_url, { end_url } from '../../api/api_url';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./contact.css"

function Contact() {
    let api = base_url + end_url.contact;
    console.log("api",api);

    const validator = (data) => {
        let err = {};
        //query
        if (!data.contact) err.contact = "required field";
        return err;
      };
    let formik = useFormik({
        initialValues: {
          query: ""
        },
        validate: validator,
        onSubmit: (values) => {
          console.log("Submitted query", values);
          axios.post(api, values)
              .then(response => {
                  console.log("response from api:", response.data);
                  alert("Query send Successfully")
              })
              .catch(error => {
                  console.log("error", error);
                  alert("Failed to send Query")
              });
      }
      });
  return (
    <section className='con-sec'>
        <h5 className='contact-h mx-auto d-flex justify-content-center'>Contact Us</h5>
        <div className='con-part mx-auto d-flex justify-content-center'>
            <Container>
                <Row>
                <Col sm={12} md={6} className='w-50 mt-5 pe-5'>
                <h4 className='loc text-dark'>Our Location</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992675!2d72.74109869670252!3d19.082522318551456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c8e837e3b%3A0x6e2736460a63b57f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600769644409!5m2!1sen!2sin"
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        className='map'
                    />
                </Col>
<Col sm={12} md={6} className='w-50 mt-5 pe-5'>
<h4 className='q text-dark'>Do you have any Query? <br />Throw it to us.....</h4>
<Form onSubmit={formik.handleSubmit}>
<Form.Group className="mb-2" controlId="contact">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your query"
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
               {formik.touched.contact && formik.errors.contact ? (
                <p className="text-end text-danger">{formik.errors?.contact}</p>) : null}
            </Form.Group> 
            <div className="d-flex justify-content-center mt-4">
              <Button
               variant="outline-dark"
               type="submit"
               value="submit"
               disabled={!(formik.dirty && formik.isValid)}>Send</Button>
            </div>
            </Form>
            <h3 className='social pt-5 mb-3 text-dark'> You can connect us on Social Platform</h3>
            <div className='social mx-auto d-flex justify-content-center'>
             <div className='text-dark fs-5 mb-2 ms-5'><span><FaFacebook size={30} color="brown" /></span></div>
             <div className='text-dark fs-5 mb-2 ms-5'><span><FaInstagram size={30} color="brown" /></span> </div>
             <div className='text-dark fs-5 mb-2 ms-5'><span><FaTwitter size={30} color="brown" /></span> </div>
             <div className='text-dark fs-5 mb-2 ms-5'><span><FaYoutube size={30} color="brown" /></span> </div>
             </div>
             <h3 className='email'>or, Email us directly <span className='text-success'>team@cookbookmanager.com</span></h3>
             
               </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}

export default Contact