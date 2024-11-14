import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import "./editdetails.css";
import base_url, { end_url } from '../../../../../api/api_url';

function Editrecipe({ showEditRecipe, onClose }) {
  let { id } = useParams();
  let api = base_url + end_url.recipe + `${id}`;
  let [state, setState] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    time: "",
    category: "",
    tag: "",
    calories: "",
    image: ""
  });

  const getDetails = () => {
    axios.get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [setState, api]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(api, state)
      .then((res) => {
        alert("Recipe Updated Successfully");
        onClose();
      })
      .catch((err) => {
        alert("Error updating");
        console.log("Update error", err);
      });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await getBase64(file);
    setState({
      ...state,
      image: base64
    });
  };

  const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  return (
    <div className={`editRecipe-container ${showEditRecipe ? 'open' : ''}`}>
      <Container>
      <h5 className='edit-recipe-head'>Edit Your Recipe</h5>
        <form onSubmit={submitHandler} className='editrecipe-form'>
          <label htmlFor="name">Recipe Name</label>
          <input type='text' name='name' value={state.name} onChange={changeHandler} />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea rows={3} name='ingredients' value={state.ingredients} onChange={changeHandler} />

          <label htmlFor="instructions">Instructions</label>
          <textarea rows={4} name='instructions' value={state.instructions} onChange={changeHandler} />

          <label htmlFor="time">Time</label>
          <input type='text' name='time' value={state.time} onChange={changeHandler} />

          <label htmlFor="category">Category</label>
          <select name="category" value={state.category} onChange={changeHandler}>
            <option value="">Select</option>
            <option value="Fruits_Vegetables">Fruits & Vegetables</option>
            <option value="Sweet_Deserts">Sweet & Deserts</option>
            <option value="Meat_Poultry">Meat & Poultry</option>
            <option value="Beverages">Beverages</option>
            <option value="Dairy_Food">Dairy Food</option>
            <option value="Sea_Food">Sea Food</option>
            <option value="Grains_Cereals">Grains & Cereals</option>
            <option value="Seeds">Seeds</option>
          </select>

          <label htmlFor="tag">Tag</label>
          <select name="tag" value={state.tag} onChange={changeHandler}>
            <option value="">Select</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
          </select>

          <label htmlFor="calories">Calories</label>
          <input type='text' name='calories' value={state.calories} onChange={changeHandler} />

          <label htmlFor="image">Image</label>
          <input type='file' name='image' onChange={handleFileChange} />

          <div className="submit-button">
            <Button variant="outline-dark" type="submit">Update Your Recipe</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Editrecipe;
