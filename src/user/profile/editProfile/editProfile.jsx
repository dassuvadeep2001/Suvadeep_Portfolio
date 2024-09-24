import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import base_url, { end_url } from '../../../api/api_url';
import './editprofile.css';

function EditProfile({ showEditProfile, onClose }) {
  const navigate = useNavigate();
  let { id } = useParams();
  let api = base_url + end_url.user + `${id}`;

  let [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    image: ''
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
    axios.put(`http://localhost:1000/user/${id}`, state)
      .then((res) => {
        alert("Data Updated Successfully");
        onClose();  // Hide the EditProfile component after update
        navigate(`/profile/${id}`);
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
    <div className={`editprofile-container ${showEditProfile ? 'open' : ''}`}>
      <Container>
        <form onSubmit={submitHandler} className='editform'>
          <label htmlFor="fname" id='formlabel'>First Name</label><br />
          <input
            type='text'
            name='fname'
            value={state.fname}
            onChange={changeHandler}
            id='forminput'
          />
          <br />
          <label htmlFor="lname" id='formlabel'>Last Name</label><br />
          <input
            type='text'
            name='lname'
            value={state.lname}
            onChange={changeHandler}
            id='forminput'
          />
          <br />
          <label htmlFor="email" id='formlabel'>Email</label><br />
          <input
            type='text'
            name='email'
            value={state.email}
            onChange={changeHandler}
            id='forminput'
          />
          <br />
          <label htmlFor="password" id='formlabel'>Password</label><br />
          <input
            type='text'
            name='password'
            value={state.password}
            onChange={changeHandler}
            id='forminput'
          />
          <br />
          <label htmlFor="image" id='formlabel'>Image</label><br />
          <input
            type='file'
            name='image'
            onChange={handleFileChange}
            id='formimage'
          />
          <br />
          <div className="d-flex justify-content-center">
            <Button variant="outline-dark" className='update-button' type="submit">Update</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditProfile;