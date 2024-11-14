import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './about.css';

function About() {
  return (
    <Container className="about-section">
      <Row>
        <Col sm={12} md={6} className="image-column">
          <img src="image/about.png" alt="CookBook" className="about-image" />
        </Col>

        <Col sm={12} md={6} className="text-column">
          <h3 className="about-heading">Your One-Stop Shop for Authentic Recipes!</h3>
          <div className="about-paragraph">
            At Cookbook, we believe in the power of food to bring people together, nourish the soul, and create unforgettable moments. Whether you're an experienced chef or new to the kitchen, our platform caters to everyone who loves to explore the culinary world.
          </div>
          <div className="about-paragraph">
            <b>Our Mission</b><br />
            Cookbook was created with a simple goal: to make high-quality, authentic recipes accessible to everyone. We partner with chefs and home cooks worldwide to offer a diverse collection of tried-and-tested recipes.
          </div>
          <div className="about-paragraph">
            <b>What We Offer</b><br />
            We’re more than just a recipe website. Cookbook offers premium, chef-curated recipes that can elevate your cooking and bring exciting flavors into your home.
          </div>
          <div className="about-paragraph">
            <b>Why Choose Cookbook?</b><br />
            <ul>
              <li>Expertly Curated Recipes from professional chefs and culinary experts.</li>
              <li>Diverse Cuisine: Our collection includes traditional local and international dishes.</li>
              <li>Exclusive Content: Unique recipes developed by our chefs.</li>
              <li>Easy Access and Affordable: Own your recipes for life with easy navigation.</li>
              <li>A Community of Food Lovers: Share experiences and celebrate the joy of cooking.</li>
            </ul>
          </div>
          <div className="closing-note">Happy cooking!</div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
