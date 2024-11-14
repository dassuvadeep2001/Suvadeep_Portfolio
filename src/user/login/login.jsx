import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import "./login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import base_url, { end_url } from "../../api/api_url";
import Swal from 'sweetalert2';

const Login = () => {
  let api = base_url + end_url.user;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validator = (data) => {
    let err = {};
    //email
    if (!data.email) err.email = "required field";
    else if (data.email.length < 10) err.email = "minimum 10 characters required";
    //password
    if (!data.password) err.password = "required field";
    else if (data.password.length < 4) err.password = "minimum 4 characters required";

    return err;
  };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validator,
    onSubmit: (values) => {
      if (!values.email && !values.password) {
        alert("Required Field");
      } else {
        axios.get(api)
          .then((res) => {
            const user = res.data;
            const users = user.find((v) =>
              v.email === values.email && v.password === values.password
            );
            if (users) {
              Swal.fire({
                title: "Good job!",
                text: "Logged In Successfully",
                icon: "success"
              });
              localStorage.setItem('userId', users.id);
              localStorage.setItem('userEmail', users.email);
              navigate(`/profile/${users.id}`);
            } else {
              alert("Invalid Email or Password");
            }
          }).catch((err) => {
            alert("Something Went Wrong");
          });
      }
    }
  });

  return (
    <section className="signin-sec">
      <div className="part1">
        <h2 className="signin-h">CookBook</h2>
        <Container className="set">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label className="label">Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-end text-danger">{formik.errors?.email}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
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
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-end text-danger">{formik.errors?.password}</p>
              ) : null}
            </Form.Group>

            <div className="d-flex justify-content-center mt-5">
              <Button
                variant="outline-dark"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
                className="log-btn2"
              >
                Sign In
              </Button>
              <Button variant="outline-dark" className="log-btn1">
                <Link to="/registration" className="r-link">Create Account</Link>
              </Button>
            </div>
          </Form>
        </Container>
        <p className="signin-p">
          <i>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</i>
        </p>
      </div>
      <p className="signin-sub-p">
        <i>Powered by</i>
      </p>
      <h1 className="signin-sub-h">CookBook.com</h1>
    </section>
  );
};

export default Login;
