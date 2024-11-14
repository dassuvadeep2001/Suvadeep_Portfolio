import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import base_url, { end_url } from '../../../api/api_url';
import './editprofile.css';

function EditProfile({ showEditProfile, onClose }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const api = `${base_url}${end_url.user}${id}`;

  const [state, setState] = useState({
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
  }, [api]);

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
        onClose();
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
        <h5 className='edit-head'>Edit Your Profile</h5>
        <form onSubmit={submitHandler} className='editform'>
          <label htmlFor="fname">First Name</label>
          <input type='text' name='fname' value={state.fname} onChange={changeHandler} />

          <label htmlFor="lname">Last Name</label>
          <input type='text' name='lname' value={state.lname} onChange={changeHandler} />

          <label htmlFor="email">Email</label>
          <input type='email' name='email' value={state.email} onChange={changeHandler} />

          <label htmlFor="password">Password</label>
          <input type='password' name='password' value={state.password} onChange={changeHandler} />

          <label htmlFor="image">Image</label>
          <input type='file' name='image' onChange={handleFileChange} />

          <div className="button-container">
            <Button variant="outline-dark" type="submit">Update</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditProfile;
