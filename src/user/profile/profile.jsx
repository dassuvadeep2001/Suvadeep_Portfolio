import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import base_url, { end_url } from '../../api/api_url';
import './profile.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditProfile from './editProfile/editProfile';

function Profile() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const api = `${base_url}${end_url.user}${id}`;
  const [state, setState] = useState([]);

  const getProfile = () => {
    axios.get(api)
      .then(res => {
        setState(res.data);
      })
      .catch(err => {
        console.log("Axios error", err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  // Function to handle opening of EditProfile
  const handleEditClick = () => {
    setShowEditProfile(true);
  };

  // Function to hide EditProfile after update is complete
  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
    getProfile();
  };

  // Logout
  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/login');
  };

  return (
    <section className='profile-sec'>
      <h3 className='title'>Your Account</h3>
      <Container>
        <Row>
          <Col sm={12} md={6} className='profile-photo'>
            <h3 className='subtitle'>Profile-Photo</h3>
            <div className='img-container'>
              <img src={state.image} alt="Profile" className='profile-image' />
            </div>
            <Button variant='outline-light' className='add-recipe-btn d-flex justify-content-center mx-auto my-5'>
              <Link to="/profile/recipeform" className='add-recipe-link'>Add Your Recipe</Link>
            </Button>
          </Col>
          <Col sm={12} md={6} className='profile-details'>
            <h3 className='subtitle'>Profile Details</h3>
            <form className='profile-form'>
              <label htmlFor="id">User-ID</label>
              <input type='text' value={state.id} readOnly className='input-field' />
              <label htmlFor="fname">Firstname</label>
              <input type='text' value={state.fname} readOnly className='input-field' />
              <label htmlFor="lname">Lastname</label>
              <input type='text' value={state.lname} readOnly className='input-field' />
              <label htmlFor="email">Email</label>
              <input type='email' value={state.email} readOnly className='input-field' />
              <label htmlFor="password">Password</label>
              <input type='password' value={state.password} readOnly className='input-field' />
            </form>
            <div className='action-buttons'>
              <Button variant='outline-light' className='edit-profile-btn' onClick={handleEditClick}>Edit Profile</Button>
              <Button variant='outline-light' className='logout-btn' onClick={handleLogout}>LogOut</Button>
            </div>
            <EditProfile showEditProfile={showEditProfile} onClose={handleCloseEditProfile} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;
