import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import base_url, { end_url } from "../../api/api_url";
import "./registration.css"

const Registration = () => {
  let api = base_url + end_url.user;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [olddata, setOlddata] = useState();

  // Base64 conversion
  const getBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  // Fetch existing data
  useEffect(() => {
    axios
      .get("http://localhost:1000/user")
      .then((res) => {
        setOlddata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Form validation
  const validator = (data) => {
    let err = {};
    if (!data.fname) err.fname = "required field";
    else if (data.fname.length < 2) err.fname = "minimum 2 characters required";

    if (!data.lname) err.lname = "required field";
    else if (data.lname.length < 2) err.lname = "minimum 2 characters required";

    if (!data.email) err.email = "required field";
    else if (data.email.length < 10) err.email = "minimum 10 characters required";

    if (!data.password) err.password = "required field";
    else if (data.password.length < 4)
      err.password = "minimum 4 characters required";

    return err;
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      image: ""
    },
    validate: validator,
    onSubmit: (values) => {
      let registerEmail = olddata.find((user) => user.email === values.email);
      if (registerEmail) {
        alert('Email already exists');
      } else {
        axios.post(api, values)
          .then(response => {
            alert("Account Created Successfully");
            navigate("/login");
          })
          .catch(error => {
            console.log("Error:", error);
            alert("Error to Create Account");
          });
      }
    }
  });

  return (
    <section className="signup-sec">
      <div className="part2">
        <h2 className="signup-h">CookBook</h2>
        <Container className="set">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="fname">
              <Form.Label className="label">Firstname*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Firstname"
                name="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fname && formik.errors.fname && (
                <p className="text-danger">{formik.errors.fname}</p>
              )}
            </Form.Group>

            <Form.Group controlId="lname">
              <Form.Label className="label">Lastname*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Lastname"
                name="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lname && formik.errors.lname && (
                <p className="text-danger">{formik.errors.lname}</p>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="label">Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-danger">{formik.errors.email}</p>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="label">Password*</Form.Label>
              <div className="password-field">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-danger">{formik.errors.password}</p>
              )}
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label className="label">Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(event) => {
                  getBase64(event.target.files[0])
                    .then(res => formik.setFieldValue("image", res))
                    .catch(err => console.log(err));
                }}
                accept="image/*"
              />
            </Form.Group>

            <div className="submit-button">
              <Button
                variant="outline-dark"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Create Account
              </Button>
            </div>
          </Form>
        </Container>
        <p className="terms">By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</p>
      </div>
      <p className="powered-by"><i>Powered by</i></p>
      <h1 className="cookbook-brand">CookBook.com</h1>
    </section>
  );
};

export default Registration;
