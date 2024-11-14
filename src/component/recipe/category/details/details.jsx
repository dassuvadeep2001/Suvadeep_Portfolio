import React, { useEffect, useState } from 'react';
import base_url, { end_url } from '../../../../api/api_url';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import "./details.css";
import Editrecipe from './edit Details/Editdeatils';

function Details() {
  const [showEditRecipe, setShowEditRecipe] = useState(false);
  const { id } = useParams();
  const api = `${base_url}${end_url.recipe}${id}`;
  const [state, setState] = useState([]);
  const loggedInUserEmail = localStorage.getItem('userEmail');

  const getFullrecipe = () => {
    axios
      .get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.error("Axios Error", err);
      });
  };

  useEffect(() => {
    getFullrecipe();
  }, [api]);

  const handleEditClick = () => {
    setShowEditRecipe(true);
  };

  const handleCloseEditRecipe = () => {
    setShowEditRecipe(false);
    getFullrecipe();
  };

  return (
    <section className="details-sec">
      <div className="container-center">
        <Card className="fullrecipe-card">
          <div className="image-wrapper">
            <Card.Img variant="top" src={state.image} className="recipe1-image" />
          </div>
          <Card.Body>
            <Card.Title id="recipedetails-title">{state.name}</Card.Title>
            <Card.Text>
              <h5>Category</h5><p>{state.category}</p>
              <h5>Ingredients</h5><p>{state.ingredients}</p>
              <h5>Instructions</h5><p>{state.instructions}</p>
              <h5>Cooking Time</h5><p>{state.time}</p>
              <h5>Calories</h5><p>{state.calories}</p>
              <h5>Recipe Tag</h5><p>{state.tag}</p>
              <p className="recipe-owner">Recipe Owner - {state.email}</p>
            </Card.Text>
            {state.email === loggedInUserEmail && (
              <Button variant="outline-dark" className="editdetails-btn d-flex justify-content-center mx-auto my-5" onClick={handleEditClick}>
                Edit Recipe
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
      <Editrecipe showEditRecipe={showEditRecipe} onClose={handleCloseEditRecipe} />
    </section>
  );
}

export default Details;
