import React from 'react'
import './footer.css'
import { FaUtensils } from 'react-icons/fa';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <section>
      <div className='footer d-flex justify-content-center'>
        <div className='part'>
             <div className=' fs-1 mb-3' id='head'> <span><FaUtensils size={45} color="brown" /></span> CookBook</div>
             <div className='text-warning-emphasis fs-6 mb-2'> <span><FaEnvelope size={15} color="brown" /></span> cookbook.info@gmail.com</div>
             <div className='text-warning-emphasis fs-6 mb-2'> <span><FaMapMarkerAlt size={15} color="brown" /></span> 234/C, Kasba Lane, Kolkata-95</div>
             <div className='text-warning-emphasis fs-6 mb-2'> <span><FaPhone size={15} color="brown" /></span> +91 9653823402</div>
        </div>
        <div className='part'>
             <div className=' fs-4 mb-3'id='head'>Quick Links</div>
             <div className='text-warning-emphasis fs-6 mb-2'>DISCLAMER</div>
             <div className='text-warning-emphasis fs-6 mb-2'>PRIVACY POLICY</div>
             <div className='text-warning-emphasis fs-6 mb-2'>TERMS & CONDITIONS</div>
             <div className='text-warning-emphasis fs-6 mb-2'>OFFER & DISCOUNTS</div>
             <div className='text-warning-emphasis fs-6 mb-2'>GET COUPON.</div>
        </div>
        <div className='part'>
             <div className='fs-3 mb-3' id='head'>More</div>
             <div className='text-warning-emphasis fs-6'>FAQ</div>
             <div className='text-warning-emphasis fs-6'>Pricing</div>
             <div className='text-warning-emphasis fs-6'>App Comparisons</div>
             <div className='text-warning-emphasis fs-6'>Bulk Importer</div>
             <div className='text-warning-emphasis fs-6'>Preview Video</div>
        </div>
        <div className='part'>
             <div className='fs-3 mb-3' id='head'>Follow Us</div>
             <div className='text-warning-emphasis'><span><FaFacebook size={15} color="brown" /></span> CookBook</div>
             <div className='text-warning-empphasis'><span><FaInstagram size={15} color="brown" /></span> CookBook@2010</div>
             <div className='text-warning-empphasis'><span><FaTwitter size={15} color="brown" /></span> JoinUs@CookBook</div>
             <div className='text-warning-empphasis'><span><FaYoutube size={15} color="brown" /></span> CookBook World</div>
        </div>
    </div>
    <div className='footerr d-flex justify-content-center'>
        <h3>Mady by React Js &copy; <i>Suvadeep das</i></h3>
    </div>
    </section>
  )
}

export default Footer