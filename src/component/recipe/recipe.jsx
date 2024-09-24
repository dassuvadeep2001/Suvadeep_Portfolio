import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url, { end_url } from "../../api/api_url";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./recipe.css"
import { Card, Col, Container, Row } from "react-bootstrap";


function Recipe() {
  let api = base_url + end_url.category;
  // console.log("Api",api);
  let [state, setState] = useState([]);

  const getProducts = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
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
      <h3 className=" recipe-heading mb-3"> Our Recipe Category</h3>
      <p className="recipe-paragraph">Welcome to CookBook, your ultimate recipe management website, where cooking becomes an exciting journey! Our carefully curated Recipe Section is organized into seven delightful categories that cater to all your culinary cravings. Explore the freshness of Vegetables & Fruits, or dive into the hearty goodness of Meat & Poultry. Indulge in the wholesome world of Grains & Cereals, or satisfy your sweet tooth with irresistible Sweet & Dessert recipes. Quench your thirst with our refreshing Beverages, enjoy the richness of Dairy Food, and discover the flavors of the ocean with our delicious Seafood options. CookBook brings every taste to your table!</p>
      </div>
      <Container style={{display: 'flex'}}>
      <Row >
      {
         state.map((recipe) => (
            <Col sm={2} md={3}>
            <Card style={{ width: '20rem'}} className='recipe-card mb-5'>
            <Card.Img variant="top" src={recipe.image} style={{height:250}} className="px-4 py-4"/>
            <Card.Body>
            <Button variant="outline-dark" className="d-flex mx-auto justify-content-center my-2 w-100">
            <Link to={`recipe/${recipe.category}`} className="text-danger text-decoration-none fs-5">
            {recipe.category}
            </Link>
            </Button>
            </Card.Body>
          </Card>
          </Col>

         ))
}
  </Row>
  </Container>
 </section>    
     
  );
}

export default Recipe;