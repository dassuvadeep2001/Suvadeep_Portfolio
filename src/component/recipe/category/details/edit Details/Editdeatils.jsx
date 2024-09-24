import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import "./editdetails.css"
import base_url, { end_url } from '../../../../../api/api_url';

function Editrecipe({ showEditRecipe, onClose }) {
  let { id } = useParams();
  let api = base_url + end_url.recipe +`${id}`;
  let [state, setState] = useState({
    name:"",
    ingredients: "",
    instructions: "",
    time: "",
    category: "",
    tag: "",
    calories: "",
    image:""
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
    axios.put(`http://localhost:1000/recipes/${id}`, state)
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
        <form onSubmit={submitHandler} className='editrecipeform'>
          <label htmlFor="name" id='recipelabel'>Recipe Name</label><br />
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={changeHandler}
            id='recipeinput'
          />
          <br />
          <label htmlFor="ingredients" id='recipelabel'>Ingredients</label><br />
          <input
            as='textarea'
            rows={3}
            name='ingredients'
            value={state.ingredients}
            onChange={changeHandler}
            id='recipeinput'
          />
          <br />
          <label htmlFor="instruction" id='recipelabel'>Instructions</label><br />
          <input
            as='textarea'
            rows={4}
            name='instructions'
            value={state.instructions}
            onChange={changeHandler}
            id='recipeinput'
          />
          <br />
          <label htmlFor="time" id='recipelabel'>Time</label><br />
          <input
            type='text'
            name='time'
            value={state.time}
            onChange={changeHandler}
            id='recipeinput'
          />
          <br />
          <label htmlFor="category" id='recipelabel'>Category</label><br/>
         <select name="category" value={state.category} onChange={changeHandler} id='recipeinput'>
         <option value="">Select</option>
                <option value="Fruits_Vegetables">Fruits_Vegetables</option>
                <option value="Sweet_Deserts">Sweet_Deserts</option>
                <option value="Meat_Poultry">Meat_Poultry</option>
                <option value="Beverages">Beverages</option>
                <option value="Dairy_Food">Dairy_Food</option>
                <option value="Sea_Food">Sea_Food</option>
                <option value="Grains_Cereals">Grains_Cereals</option>
                <option value="Seeds">Seeds</option>
         </select>
         <br/>
         <label htmlFor="tag" id='recipelabel'>Tag</label><br/>
         <select name="tag" value={state.tag} onChange={changeHandler} id='recipeinput'>
                <option value="">Select</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
         </select>
         <br/>
          <label htmlFor="calories" id='recipelabel'>Calories</label><br />
          <input
            type='text'
            name='calories'
            value={state.calories}
            onChange={changeHandler}
            id='recipeinput'
          />
          <br />
          <label htmlFor="image" id='recipelabel'>Image</label><br />
          <input
            type='file'
            name='image'
            onChange={handleFileChange}
            id='recipeimage'
          />
          <br />
          <div className="d-flex justify-content-center">
            <Button variant="outline-dark" type="submit" className='w-50'>Update Your Recipe</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Editrecipe;