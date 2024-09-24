import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import "./recipeform.css"
import axios from "axios";
import base_url, { end_url } from "../../../api/api_url";
import Swal from 'sweetalert2'

const RecipeForm = () => {

let api=base_url+end_url.recipe
console.log("api",api);

  //base64 conversion
 const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

  const validator = (data) => {
    let err = {};
    //name
    if (!data.email) err.email = "required field";
    //name
    if (!data.name) err.name = "required field";
    //ingredients
    if (!data.ingredients) err.ingredients = "required field";
    //instructions
    if (!data.instructions) err.instructions = "required field";
    //time
    if (!data.time) err.time = "required field";
    //category
    if (!data.category) err.category = "required field";
    //tag
    if (!data.tag) err.tag = "required field";
    //made-in
    if (!data.calories) err.calories = "required field";

    return err;
  };
  let formik = useFormik({
    initialValues: {
      email:"",
      name:"",
      ingredients: "",
      instructions: "",
      time: "",
      category: "",
      tag: "",
      calories: "",
      image:""
    },
    validate: validator,
    onSubmit: (values) => {
      console.log("Submitted values", values);
      axios.post(api,values)
          .then(response => {
              console.log("response from api:", response.data);
              Swal.fire({
                title: "Good job!",
                text: "Recipe Added Successfully",
                icon: "success"
              });
          })
          .catch(error => {
              console.log("error", error);
              alert("Failed to add Recipe")
          });
  }
  });

  return (
    <section className="recipeform-back">
      <div className="recipeform">
      <h2 className="recipeform-head">
        Add Your Recipe...In Our CookBook Page...
      </h2>
        <Container className="">
          <Form onSubmit={formik.handleSubmit}>

          <Form.Group className="mb-2" controlId="email">
              <Form.Label className=" text-dark-emphasis">
              Email ID
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email Id"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-end text-danger">{formik.errors?.email}</p>
              ) : null}
            </Form.Group>

          <Form.Group className="mb-2" controlId="name">
              <Form.Label className=" text-dark-emphasis">
              Recipe Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of your recipe"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-end text-danger">{formik.errors?.name}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="ingredients">
              <Form.Label className=" text-dark-emphasis">
              Ingredients
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter the ingredients of your recipe"
                name="ingredients"
                value={formik.values.ingredients}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.ingredients && formik.errors.ingredients ? (
                <p className="text-end text-danger">{formik.errors?.ingredients}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="instructions">
              <Form.Label className=" text-dark-emphasis">Instructions</Form.Label>
              <Form.Control
               as="textarea"
               rows={4}
                placeholder="Enter the instructions of your recipe"
                name="instructions"
                value={formik.values.instructions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.instructions && formik.errors.instructions ? (
                <p className="text-end text-danger">{formik.errors?.instructions}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="time">
              <Form.Label className=" text-dark-emphasis">Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the cooking time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.time && formik.errors.time ? (
                <p className="text-end text-danger">{formik.errors?.time}</p>
              ) : null}
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="category">
              <Form.Label className="text-dark-emphasis">Category of Recipe</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select</option>
                <option value="Fruits_Vegetables">Fruits_Vegetables</option>
                <option value="Sweet_Deserts">Sweet_Deserts</option>
                <option value="Meat_Poultry">Meat_Poultry</option>
                <option value="Beverages">Beverages</option>
                <option value="Dairy_Food">Dairy_Food</option>
                <option value="Sea_Food">Sea_Food</option>
                <option value="Grains_Cereals">Grains_Cereals</option>
                <option value="Seeds">Seeds</option>
              </Form.Select>
              {formik.touched.category && formik.errors.category ? (
              <p className="text-end text-danger">{formik.errors?.category}</p>
            ) : null}
            </Form.Group>

              <Form.Group className="mb-2" controlId="tag">
              <Form.Label className="text-dark-emphasis">Tag of Recipe</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="tag"
                value={formik.values.tag}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Select</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
              </Form.Select>
              {formik.touched.type && formik.errors.type ? (
              <p className="text-end text-danger">{formik.errors?.type}</p>
            ) : null}
            </Form.Group>

              <Form.Group className="mb-2" controlId="calories">
              <Form.Label className=" text-dark-emphasis">
              Calories
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the calories of your recipe"
                name="calories"
                value={formik.values.calories}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.calories && formik.errors.calories ? (
                <p className="text-end text-danger">{formik.errors?.calories}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="image">
              <Form.Label className=" text-dark-emphasis">Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(event)=>{
                  getBase64(event.target.files[0]).then(res=>{
                    // console.log(res);
                    formik.setFieldValue("image",res)
                    
                  }).catch(err=>console.log(err)
                  )
                }}
                accept="image/*"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-dark"
                type="submit"
                value="submit"
                disabled={!(formik.dirty && formik.isValid)}
                className="recipe-submit-button"
              >
                Submit Recipe
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default RecipeForm;
