import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from '../layout/header/header'
import Footer from '../layout/footer/footer'
import Home from '../component/home/home'
import About from '../component/about/About'
import Review from '../component/review/review'
import Reviewform from '../component/review/reviewform/reviewform'
import Contact from '../component/contact/contact'
import Start from '../getstarted/start'
import Login from '../user/login/login'
import Registration from '../user/register/registration'
import Profile from '../user/profile/profile'
import EditProfile from '../user/profile/editProfile/editProfile'
import RecipeForm from '../component/recipe/recipe form/recipeform'
import Recipe from '../component/recipe/recipe'
import Details from '../component/recipe/category/details/details'
import RecipeList from '../component/recipe/category/recipewise'
import Editrecipe from '../component/recipe/category/details/edit Details/Editdeatils'

function Routing() {
  return (
    <Router>
      <Header/>
        <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="review" element={<Review/>}/>
        <Route path="reviewform" element={<Reviewform/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="start" element={<Start/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="profile/:id" element={<Profile/>}/>
        <Route path="profile/:id/editProfile/:id" element={<EditProfile/>}/>
        <Route path="profile/recipeform" element={<RecipeForm/>}/>
        <Route path="category" element={<Recipe/>}/>
        <Route path="category/recipe/:category" element={<RecipeList />} />
        <Route path="category/recipe/:category/details/:id" element={<Details/>}/>
        <Route path="category/recipe/:category/details/:id/editrecipe/:id" element={<Editrecipe/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Routing