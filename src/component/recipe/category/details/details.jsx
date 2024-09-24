import React, { useEffect, useState } from 'react'
import base_url, { end_url } from '../../../../api/api_url';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import "./details.css"
import Editrecipe from './edit Details/Editdeatils';

function Details() {
  let [showEditRecipe, setShowEditRecipe] = useState(false);
    let {id}=useParams();
    // console.log("id",id);
    let api=base_url+end_url.recipe+`${id}`
    // console.log(api);
    let [state, setState] = useState([]);

    const loggedInUserEmail = localStorage.getItem('userEmail');
    // console.log(loggedInUserEmail);

    const getFullrecipe = () => {
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
      getFullrecipe();
    }, [setState, api]);

    // Function to handle opening of EditProfile
  const handleEditClick = () => {
    setShowEditRecipe(true); // Show the EditProfile component
  };

  // Function to hide EditProfile after update is complete
  const handleCloseEditRecipe = () => {
    setShowEditRecipe(false); // Hide the EditProfile component
    getFullrecipe();
  };
    
  return (
    <section className='details-sec'>
      <div className='mx-auto d-flex justify-content-center'>
      <Card style={{ width: '60rem'}} className='fullrecipe-card mb-5 ms-5'>
            <Card.Img variant="top" src={state.image} style={{height:400,width:600,}} className="px-4 py-4 mx-auto"/>
            <Card.Body>
            <Card.Title className='mx-auto d-flex justify-content-center mb-5'>{state.name}</Card.Title>
            <Card.Text>
              <h5>Category</h5><p>{state.category}</p>
              <h5>Ingredients</h5><p>{state.ingredients}</p>
              <h5>Instruction</h5><p>{state.instructions}</p>
              <h5>Cooking-Time</h5><p>{state.time}</p>
              <h5>Calories</h5><p>{state.calories}</p>
              <h5>Recipe-Tag</h5><p>{state.tag}</p>
              <p className='text-end'>Recipe Owner - {state.email}</p>
            </Card.Text>
            {state.email === loggedInUserEmail && (
                  <Button variant="outline-dark" type="submit" className='editdetails-btn mt-5 mb-3 mx-auto d-flex justify-content-center w-50'
                  onClick={handleEditClick}>Edit Recipe</Button>  
                  )}
            </Card.Body>
          </Card>
      </div>
      <Editrecipe showEditRecipe={showEditRecipe} onClose={handleCloseEditRecipe} />
    </section>
  )
}

export default Details