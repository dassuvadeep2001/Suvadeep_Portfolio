import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card,Col,Container,Row,Button } from 'react-bootstrap';
import base_url, { end_url } from '../../api/api_url';
import "./profile.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditProfile from './editProfile/editProfile';

function Profile() {
  let [showEditProfile, setShowEditProfile] = useState(false);
let navigate=useNavigate()
  let {id} = useParams();
    // console.log("id",id);
    let api=base_url+end_url.user+`${id}`;
    // console.log("api",api);
   

    let[state,setState]=useState([]);
    const getProfile=()=>{
        axios.get(api)
        .then(res=>{
            console.log("Authentication",res.data);
            setState(res.data) 
        })
        .catch(err=>{
            console.log("Axios error",err);
            
        })
    }
    useEffect(()=>{
        getProfile()
    },[])

    // Function to handle opening of EditProfile
  const handleEditClick = () => {
    setShowEditProfile(true); // Show the EditProfile component
  };

  // Function to hide EditProfile after update is complete
  const handleCloseEditProfile = () => {
    setShowEditProfile(false); // Hide the EditProfile component
    getProfile();
  };
  //logout
  const handleLogout = ()=>{
    window.localStorage.clear()
    navigate('/login')
 }
    
  return (
    <section className='profile-sec' >
  
      <h3 className='mx-auto py-3 d-flex justify-content-center text-light fs-1'>Your Account</h3>
      <Container >
        <Row>
        <>
        <Col sm={12} md={6} className='w-50 mt-3 pe-5 ms-0'>
        <h3 className='mx-auto d-flex justify-content-center fs-2 text-light mb-5'>Profile-Photo</h3>
        <div className='img-container mx-auto d-flex justify-content-center'>
        <img src={state.image} alt="" className='image'/>
        </div>
        <Button variant='outline-light' type="submit" className='add-btn fs-5 mx-auto d-flex justify-content-center'><Link to="/profile/recipeform" className='link1'>Add Your Recipe</Link></Button>
</Col>
<Col sm={12} md={6} className='w-50 mt-3 ps-5'>
<h3 className='mx-auto d-flex justify-content-center fs-2 text-light'>Profile Details</h3>
<form className='px-5 py-2'>
      <label htmlFor="id">User-ID</label><br/>
      <input
      type='text'
      value={state.id}
      className='fs-5'/>  
      <br />
      <label htmlFor="fname">Firstname</label><br/>
      <input
      type='text'
      value={state.fname}
      className='fs-5'/>
      <br />
      <label htmlFor="lname">Lastname</label><br/>
      <input
      type='text'
      value={state.lname}
      className='fs-5'/>  
      <br />
      <label htmlFor="email">Email</label><br/>
      <input
      type='email'
      value={state.email}
      className='fs-5'/>  
      <br />
      <label htmlFor="password">Password</label><br/>
      <input
      type='password'
      value={state.password}
      className='fs-5'/> 
      <br />
      </form>
<div className='d-flex'>
<Button variant='outline-light' type="submit" className='edit-btn fs-5 mx-auto d-flex justify-content-center my-5' onClick={handleEditClick}>Edit Profile</Button>
<Button variant='outline-light' type="submit" className='edit-btn fs-5 mx-auto d-flex justify-content-center my-5' onClick={handleLogout}>LogOut</Button>
</div>
<EditProfile showEditProfile={showEditProfile} onClose={handleCloseEditProfile} />
</Col>
</>
    </Row>
    </Container>
  </section>
  )
}

export default Profile