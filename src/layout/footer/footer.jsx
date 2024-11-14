import React from 'react';
import './footer.css';
import { FaUtensils, FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer'>
        <div className='part'>
          <div id='title'> <FaUtensils className='icon' /> CookBook</div>
          <div className='info'> <FaEnvelope className='icon' /> cookbook.info@gmail.com</div>
          <div className='info'> <FaMapMarkerAlt className='icon' /> 234/C, Kasba Lane, Kolkata-95</div>
          <div className='info'> <FaPhone className='icon' /> +91 9653823402</div>
        </div>
        <div className='part'>
          <div id='title' href='#'>Quick Links</div>
          <div className='f-link' href='#'>DISCLAIMER</div>
          <div className='f-link' href='#'>PRIVACY POLICY</div>
          <div className='f-link' href='#'>TERMS & CONDITIONS</div>
          <div className='f-link' href='#'>OFFER & DISCOUNTS</div>
          <div className='f-link' href='#'>GET COUPON</div>
        </div>
        <div className='part'>
          <div id='title'>More</div>
          <div className='f-link' href='#'>FAQ</div>
          <div className='f-link' href='#'>Pricing</div>
          <div className='f-link' href='#'>App Comparisons</div>
          <div className='f-link' href='#'>Bulk Importer</div>
          <div className='f-link' href='#'>Preview Video</div>
        </div>
        <div className='part'>
          <div id='title'>Follow Us</div>
          <div className='social'> <FaFacebook className='icon' /> CookBook</div>
          <div className='social'> <FaInstagram className='icon' /> CookBook@2010</div>
          <div className='social'> <FaTwitter className='icon' /> JoinUs@CookBook</div>
          <div className='social'> <FaYoutube className='icon' /> CookBook World</div>
        </div>
      </div>
      <div className='footer-bottom'>
        <h6>Made by React Js &copy; <i>Suvadeep Das</i></h6>
      </div>
    </section>
  );
}

export default Footer;
