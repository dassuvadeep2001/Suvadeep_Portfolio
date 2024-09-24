import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./about.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function About() {
  return (
    <Container>
        <Row>
            <Col sm={12} md={6} className='w-50 mt-5 pe-5'>
            <img src="image/img5.webp" alt="" />
            <h3 className='pt-5 mb-3 text-danger'> Connect With Us</h3>
             <div className='text-dark fs-5 mb-2'><span><FaFacebook size={20} color="red" /></span> CookBook</div>
             <div className='text-dark fs-5 mb-2'><span><FaInstagram size={20} color="red" /></span> CookBook@2010</div>
             <div className='text-dark fs-5 mb-2'><span><FaTwitter size={20} color="red" /></span> JoinUs@CookBook</div>
             <div className='text-dark fs-5 mb-2'><span><FaYoutube size={20} color="red" /></span> CookBook World</div>

            </Col>
            <Col sm={12} md={6} className='w-50 mt-5'>
            <h3 className='mx-auto d-flex justify-content-center mb-3 text-warning'>Your One-Stop Shop for Authentic Recipes!</h3>
            <p>
               <div className='mb-3'>At Cookbook, we believe in the power of food to bring people together, nourish the soul, and create unforgettable moments. Whether you're an experienced chef or someone new to the kitchen, our platform is designed to cater to everyone who loves to explore the culinary world.</div>
               <div className='mb-3'><b>Our Mission</b><br /> Cookbook was created with a simple goal to make high-quality, authentic recipes accessible to everyone. We understand how hard it can be to find reliable recipes that deliver the same delicious results every time. That’s why we’ve partnered with talented chefs, food enthusiasts, and home cooks from around the world to offer a diverse collection of tried-and-tested recipes for you to enjoy.</div>
               <div className='mb-3'><b>What We Offer</b><br />We’re more than just a recipe website. Cookbook offers premium, chef-curated recipes that can elevate your cooking and bring exciting flavors into your home. Whether you're looking to perfect a family favorite, try something new, or recreate dishes from different cultures, we have it all.
                                                         <br />Each recipe on Cookbook is carefully selected for its authenticity, ease of preparation, and use of quality ingredients. With clear, step-by-step instructions, ingredient lists, and cooking tips, we ensure that even the most complex dishes become manageable and fun.</div>
               <div className='mb-3'><b>Why Choose Cookbook?</b><br />1. Expertly Curated Recipes: We collaborate with professional chefs and culinary experts to bring you recipes that are authentic, flavorful, and unique. Each recipe is crafted with precision, ensuring that you get the best results every time.

                                                                <br />2. Diverse Cuisine: Our collection spans a wide variety of cuisines, from traditional local dishes to international delicacies. Whether you’re craving Italian, Asian, Mediterranean, or something closer to home, you’ll find something to suit your taste.

                                                                <br />3. Exclusive Content: Cookbook offers exclusive recipes that you won’t find anywhere else. Our chefs continuously develop new dishes, keeping the collection fresh and innovative.

                                                                <br />4. Easy Access and Affordable: Once you purchase a recipe, it’s yours to keep. Our platform ensures you have access to all your recipes, anytime and anywhere, with easy navigation and customer support if you need it.

                                                                <br />5. A Community of Food Lovers: Cookbook is more than just a marketplace. It’s a community where food enthusiasts can come together, share their experiences, and celebrate the joy of cooking. We love hearing from our customers, whether it’s through sharing photos of your finished dishes, asking questions, or leaving reviews.</div>
               <div className='text-danger fs-5'>Happy cooking!</div>
            </p>
            </Col>
        </Row>
    </Container>
  )
}

export default About