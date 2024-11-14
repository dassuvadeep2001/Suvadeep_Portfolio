import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./recipewise.css"; // Link to the custom CSS file
import { FaSearch } from "react-icons/fa";
import base_url, { end_url } from "../../../api/api_url";

function RecipeList() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const api = base_url + end_url.recipe;

  const loggedInUserEmail = localStorage.getItem('userEmail');

  const getRecipe = () => {
    axios
      .get(api)
      .then((response) => {
        const filteredRecipes = response.data.filter(
          (recipe) => recipe.category === category
        );
        setRecipes(filteredRecipes);
      })
      .catch((err) => {
        console.log("Axios error:", err);
      });
  };

  useEffect(() => {
    getRecipe();
  }, [setRecipes, api]);

  const handleSearchChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  const filteredRecipes = recipes.filter((itm) => {
    if (searchRecipe === "") {
      return itm;
    } else if (itm.name.toLowerCase().includes(searchRecipe.toLowerCase())) {
      return itm;
    }
    return null;
  });

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:1000/recipes/${id}`)
      .then((res) => {
        alert("Recipe Deleted Successfully");
        getRecipe();
      })
      .catch((err) => {
        console.log("Error to delete recipe: ", err);
      });
  };

  return (
    <section className="recipewise-sec">
      <Container>
        <div className="search-container">
          <h3 className="recipewise-heading">Recipes of {category} section</h3>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search Recipes"
              value={searchRecipe}
              onChange={handleSearchChange}
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
        <Row>
          {filteredRecipes.map((recipe) => (
            <Col sm={6} md={4} lg={3} key={recipe.id}>
              <Card className="recipewise-card mb-4">
                <Card.Img variant="top" src={recipe.image} className="recipe-image" />
                <Card.Body>
                  <Card.Title className="recipe-title">Recipe Name: {recipe.name}</Card.Title>
                  <Card.Text className="recipe-category">Category: {recipe.category}</Card.Text>
                  <p className="recipe-author">Recipe added by - {recipe.email}</p>
                  <Button variant="outline-dark" className="view-button">
                    <Link to={`details/${recipe.id}`} className="view-link">
                      View Recipe
                    </Link>
                  </Button>
                  {recipe.email === loggedInUserEmail && (
                    <Button
                      onClick={() => deleteItem(recipe.id)}
                      variant="outline-dark"
                      className="delete-button"
                    >
                      Delete Recipe
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default RecipeList;
