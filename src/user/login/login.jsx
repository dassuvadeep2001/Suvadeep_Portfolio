import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import "./login.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import base_url, { end_url } from "../../api/api_url";
import Swal from 'sweetalert2'

const Login = () => {
  let api = base_url +end_url.user
  // console.log("api", api);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();



  const validator = (data) => {
    let err = {};
    //email
    if (!data.email) err.email = "required field";
    else if (data.email.length < 10) err.email = "minimum 10 character required";
    //password
    if (!data.password) err.password = "required field";
    else if (data.password.length < 4)
      err.password= "minimum 4 character required";

    return err;
  };
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validator,
    onSubmit: 
    (values) => {
      console.log("Submitted values", values);
      if(!values.email && !values.password){
        alert("Required Field")
      }
      else{
        axios.get(api)
        .then((res)=>{
          console.log("response",res.data)
          const user=res.data;
          const users=user.find((v)=>
          v.email===values.email && v.password===values.password);
          
          if(users){
            Swal.fire({
              title: "Good job!",
              text: "Logged In Successfully",
              icon: "success"
            });
         localStorage.setItem('userId', users.id);
         localStorage.setItem('userEmail', users.email);
         
        navigate(`/profile/${users.id}`)
        // navigate("/profile")
          }
          else{
            alert("invalid Email or Password")
          }
        }).catch((err)=>{
          console.log("error during login",err);
          alert("Something Went Wrong")
        })
      }
}
  });

  return (
    
    <section className="signin-sec py-4 px-5">
    <div className="part1 mx-auto justify-content-center">
    <h2 className="signin-h mx-auto d-flex justify-content-center">
      CookBook
    </h2>
      <Container className="set">
        <Form onSubmit={formik.handleSubmit}>

          <Form.Group className="mb-2" controlId="email">
            <Form.Label className=" text-dark-emphasis">Email*</Form.Label>
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
            <Form.Label className=" text-dark-emphasis">Password*</Form.Label>
            <div className="position-relative">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
                className="position-absolute"
                style={{ top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
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
              value="submit"
              disabled={!(formik.dirty && formik.isValid)}
              className="log-btn2"
            >
              Sign In
            </Button>
            <Button
              variant="outline-dark"
              type="submit"
              value="submit"
              className="log-btn1"
            >
             <Link to="/registration" className='link'>Create Account</Link>
            </Button>
          </div>
        </Form>
      </Container>
      <p className="signin-p"><i>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</i>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</p>
    </div>
    <p className="signin-sub-p mx-auto d-flex justify-content-center"><i>Powered by</i></p>
    <h1 className="signin-sub-h mx-auto d-flex justify-content-center">CookBook.com</h1>
  </section>
);
};

export default Login;