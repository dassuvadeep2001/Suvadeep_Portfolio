import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import "./recipeform.css";
import axios from "axios";
import base_url, { end_url } from "../../../api/api_url";
import Swal from 'sweetalert2';

const RecipeForm = () => {
  const api = `${base_url}${end_url.recipe}`;
  console.log("API Endpoint:", api);

  // Base64 conversion
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // Validation Function
  const validate = (data) => {
    let errors = {};

    if (!data.email) errors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    )
      errors.email = "Invalid email address";

    if (!data.name) errors.name = "Recipe name is required";

    if (!data.ingredients) errors.ingredients = "Ingredients are required";

    if (!data.instructions) errors.instructions = "Instructions are required";

    if (!data.time) errors.time = "Cooking time is required";

    if (!data.category) errors.category = "Category is required";

    if (!data.tag) errors.tag = "Tag is required";

    if (!data.calories) errors.calories = "Calories are required";
    else if (isNaN(data.calories)) errors.calories = "Calories must be a number";

    return errors;
  };

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      ingredients: "",
      instructions: "",
      time: "",
      category: "",
      tag: "",
      calories: "",
      image: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        // If an image is selected, ensure it's in base64
        if (values.image && typeof values.image !== "string") {
          values.image = await getBase64(values.image);
        }

        console.log("Submitted values", values);
        const response = await axios.post(api, values);
        console.log("Response from API:", response.data);
        Swal.fire({
          title: "Good job!",
          text: "Recipe Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        resetForm();
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Oops!",
          text: "Failed to add Recipe",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

  return (
    <section className="recipeform-back">
      <div className="recipeform-container">
        <h2 id="recipeform-head">
          Add Your Recipe to Our Cookbook
        </h2>
        <Container>
          <Form onSubmit={formik.handleSubmit} className="recipeform-form">
            {/* Email Field */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="form-label">Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email ID"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
            </Form.Group>

            {/* Recipe Name Field */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="form-label">Recipe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of your recipe"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.name && formik.errors.name
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback">{formik.errors.name}</div>
              )}
            </Form.Group>

            {/* Ingredients Field */}
            <Form.Group className="mb-3" controlId="ingredients">
              <Form.Label className="form-label">Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter the ingredients of your recipe"
                name="ingredients"
                value={formik.values.ingredients}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.ingredients && formik.errors.ingredients
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.ingredients && formik.errors.ingredients && (
                <div className="invalid-feedback">
                  {formik.errors.ingredients}
                </div>
              )}
            </Form.Group>

            {/* Instructions Field */}
            <Form.Group className="mb-3" controlId="instructions">
              <Form.Label className="form-label">Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter the instructions of your recipe"
                name="instructions"
                value={formik.values.instructions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.instructions && formik.errors.instructions
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.instructions && formik.errors.instructions && (
                <div className="invalid-feedback">
                  {formik.errors.instructions}
                </div>
              )}
            </Form.Group>

            {/* Cooking Time Field */}
            <Form.Group className="mb-3" controlId="time">
              <Form.Label className="form-label">Cooking Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the cooking time (e.g., 30 minutes)"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.time && formik.errors.time
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.time && formik.errors.time && (
                <div className="invalid-feedback">{formik.errors.time}</div>
              )}
            </Form.Group>

            {/* Category Field */}
            <Form.Group className="mb-3" controlId="category">
              <Form.Label className="form-label">Category of Recipe</Form.Label>
              <Form.Select
                aria-label="Select recipe category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.category && formik.errors.category
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="">Select</option>
                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                <option value="Sweet & Desserts">Sweet & Desserts</option>
                <option value="Meat & Poultry">Meat & Poultry</option>
                <option value="Beverages">Beverages</option>
                <option value="Dairy Food">Dairy Food</option>
                <option value="Sea Food">Sea Food</option>
                <option value="Grains & Cereals">Grains & Cereals</option>
                <option value="Seeds">Seeds</option>
              </Form.Select>
              {formik.touched.category && formik.errors.category && (
                <div className="invalid-feedback">{formik.errors.category}</div>
              )}
            </Form.Group>

            {/* Tag Field */}
            <Form.Group className="mb-3" controlId="tag">
              <Form.Label className="form-label">Tag of Recipe</Form.Label>
              <Form.Select
                aria-label="Select recipe tag"
                name="tag"
                value={formik.values.tag}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.tag && formik.errors.tag
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="">Select</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
              </Form.Select>
              {formik.touched.tag && formik.errors.tag && (
                <div className="invalid-feedback">{formik.errors.tag}</div>
              )}
            </Form.Group>

            {/* Calories Field */}
            <Form.Group className="mb-3" controlId="calories">
              <Form.Label className="form-label">Calories</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the calories of your recipe"
                name="calories"
                value={formik.values.calories}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input ${
                  formik.touched.calories && formik.errors.calories
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.calories && formik.errors.calories && (
                <div className="invalid-feedback">{formik.errors.calories}</div>
              )}
            </Form.Group>

            {/* Image Field */}
            <Form.Group className="mb-3" controlId="image">
              <Form.Label className="form-label">Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    formik.setFieldValue("image", file);
                  }
                }}
                accept="image/*"
                className="form-input"
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-dark"
                type="submit"
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

