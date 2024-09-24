import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./recipewise.css";
import { FaSearch } from "react-icons/fa";
import base_url, { end_url } from "../../../api/api_url";

function RecipeList() {
  const { category } = useParams(); // Get category from URL
  // console.log("category name",category);
  
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const api = base_url+end_url.recipe;
  // console.log("api",api);

  const loggedInUserEmail = localStorage.getItem('userEmail');
  // console.log(loggedInUserEmail);
  

    const getRecipe=()=>{
    axios
      .get(api)
      .then((response) => {
        // Filter recipes by category name
        const filteredRecipes = response.data.filter(
          (recipe) => recipe.category === category
        );
        setRecipes(filteredRecipes);
      })
      .catch((err) => {
        console.log("Axios error:", err);
      });
    }
    useEffect(()=>{
      getRecipe()
  },[setRecipes,api])


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

  // for delete product
const deleteItem=(id)=>{
  console.log("id of the recipe to be deleted",id);
  axios.delete(`http://localhost:1000/recipes/${id}`)
  .then(res=>{
    console.log("axios response for delete",res);
    alert("Recipe Deleted Successfully") 
    getRecipe();
  }).catch(err=>{
    console.log("Error to delete recipe: ",err);
    
  })
  
}

  return (
    <section className="recipewise-sec">
      <Container>
      <div className="search-container ">
        <h3 className="recipewise-heading">Recipes of {category} section</h3>
        <div className="search-input-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Recipes"
          value={searchRecipe}
          onChange={handleSearchChange}
        />
        <FaSearch className="search-icon" />
        </div>
        </div>
        <Row>
          {filteredRecipes.map((recipe) => (
            <Col sm={3} md={4} key={recipe.id}>
              <Card style={{ width: '25rem' }} className="recipewise-card mb-5 ms-3">
                <Card.Img variant="top" src={recipe.image} style={{ height: 250 }} className="" />
                <Card.Body>
                  <Card.Title>Recipe Name: {recipe.name}</Card.Title>
                  <Card.Text>Category: {recipe.category}</Card.Text>
                  <p>Recipe added by - {recipe.email}</p>
                  <Button variant="outline-dark" className=" my-2 w-100">
                    <Link to={`details/${recipe.id}`} className="text-danger text-decoration-none fs-6">
                      View Recipe
                    </Link>
                  </Button>
                  {recipe.email === loggedInUserEmail && (
                    <Button onClick={() => deleteItem(recipe.id)} variant="outline-dark" className=" my-2 text-danger w-100">
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