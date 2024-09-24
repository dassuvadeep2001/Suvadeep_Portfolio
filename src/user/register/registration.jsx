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
  let api = base_url +end_url.user
  // console.log("api", api);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  //base64 conversion
 const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

const[olddata,setOlddata]=useState();

//exsisting data
useEffect(()=>{
  axios
  .get("http://localhost:1000/user")
  .then((res)=>{
    // console.log(res.data);
    setOlddata(res.data)
  })
  .catch((err)=>{
    console.log(err);
    
  })
},[]);

  const validator = (data) => {
    let err = {};
    //firstname
    if (!data.fname) err.fname = "required field";
    else if (data.fname.length < 2) err.fname = "minimum 2 character required";
    //lastname
    if (!data.lname) err.lname = "required field";
    else if (data.lname.length < 2) err.lname = "minimum 2 character required";
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
      fname: "",
      lname: "",
      email: "",
      password: "",
      image:""
    },
    validate: validator,
    onSubmit: 
    (values) => {
      console.log("Submitted values", values);
    let registerEmail=olddata.find((user)=> user.email===values.email);
    if(registerEmail){
      alert('Email already Exist')
    }else{
      axios.post(api, values)
          .then(response => {
              console.log("response from api:", response.data);
              alert("Account Created Successfully")
              navigate("/login")
          })
          .catch(error => {
              console.log("error", error);
              alert("Error to Create Account")
          });
  }}
  });


  return (
    <section className="signup-sec py-4 px-5">
      <div className="part2 mx-auto justify-content-center">
      <h2 className="signup-h d-flex justify-content-center">
        CookBook
      </h2>
        <Container className="set">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-2" controlId="fname">
              <Form.Label className=" text-dark-emphasis">
                Firstname*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Firstname"
                name="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <p className="text-end text-danger">{formik.errors?.fname}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-2" controlId="lname">
              <Form.Label className=" text-dark-emphasis">
                Lastname*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Lastname"
                name="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lname && formik.errors.lname ? (
                <p className="text-end text-danger">{formik.errors?.lname}</p>
              ) : null}
            </Form.Group>

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
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="outline-dark"
                type="submit"
                value="submit"
                disabled={!(formik.dirty && formik.isValid)}
                className="signup-btn"
              >
                Create Account
              </Button>
            </div>
          </Form>
        </Container>
        <p className="signup-p"><i>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</i>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</p>
      </div>
      <p className="signup-sub-p mx-auto d-flex justify-content-center"><i>Powered by</i></p>
    <h1 className="signup-sub-h mx-auto d-flex justify-content-center">CookBook.com</h1>
    </section>
  );
};

export default Registration;
