import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url, { end_url } from "../../api/api_url";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./recipe.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function Recipe() {
  let api = base_url + end_url.category;
  let [state, setState] = useState([]);

  const getProducts = () => {
    axios
      .get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Err", err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [setState, api]);

  return (
    <section className="recipe1-sec">
      <div className="recipe-heading-sec">
        <h3 className="recipe-heading">Our Recipe Category</h3>
        <p className="recipe-paragraph">
          Welcome to CookBook, your ultimate recipe management website, where cooking becomes an exciting journey! Our carefully curated Recipe Section is organized into seven delightful categories that cater to all your culinary cravings. Explore the freshness of Vegetables & Fruits, or dive into the hearty goodness of Meat & Poultry. Indulge in the wholesome world of Grains & Cereals, or satisfy your sweet tooth with irresistible Sweet & Dessert recipes. Quench your thirst with our refreshing Beverages, enjoy the richness of Dairy Food, and discover the flavors of the ocean with our delicious Seafood options. CookBook brings every taste to your table!
        </p>
      </div>
      <Container>
        <Row className="recipe-row">
          {state.map((recipe, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="recipe-col">
              <Card className="recipe-card">
                <Card.Img variant="top" src={recipe.image} className="recipe-image" />
                <Card.Body>
                  <Button variant="outline-dark" className="recipe-button">
                    <Link to={`recipe/${recipe.category}`} className="recipe-link">
                      {recipe.category}
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Recipe;
