import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

function FooterContent() {
    return ( 
<div className=" pt-5  bg-black w-100 h-100 p-2 text-light">
    <h3 className="ms-4 text Playfair fs-3">Tryme<sup className="fs-5">®</sup></h3>
  
    <ul >
        <li className="d-flex justify-content-between">
           <a>
            <ul className="list-unstyled">
            <li className="text">SERVICES</li>
            <li className="mt-3 fs-6">Contact Us</li>
            <li className="mt-1 fs-6">Track Ourder</li>
            <li className="mt-1 fs-6">Return Ourder</li>
            <li className="mt-1 fs-6">Cancel Ourder</li>
            </ul>
            </a>
           <a>
            <ul className="list-unstyled">
            <li className="text">COMPANY</li>
            <li className="mt-3 fs-6">About Us</li>
            <li className="mt-1 fs-6">We're Hiring</li>
            <li className="mt-1 fs-6">Blog</li>
          
            </ul>
            </a>
           <a>
            <ul className="list-unstyled me-1">
            <li className="text">CONNECT WITH US</li>
            <li className="mt-3 fs-6"><Facebook/> 4.7M Like</li>
            <li className="mt-1 fs-6"><Instagram/> 1M Followers</li>
            </ul>
            </a>
          
        </li>
        <h5 className="text-center fs-6 text text-decoration-underline">Keep In Touch</h5>
        <div className="mt-4 container ">
            
        <div class="subscribe">
    <p>SUBSCRIBE</p>
    <input placeholder="Your e-mail" class="subscribe-input" name="email" type="email"/>
    <br></br>
    <div class="submit-btn">SUBMIT</div>
  </div>
    </div>
    </ul >
    <div className="mt-5 text-center">
    <Twitter className="cp"/>
    <Facebook className="ms-3 cp"/>
    <Instagram className="ms-3 cp"/>
    <LinkedIn className="ms-3 cp"/>
    <GitHub className="ms-3 cp" />
    </div>
    
    <hr/>
    <p className="text-center">&copy; 2024&nbsp; Tryme. &nbsp;All&nbsp; rights &nbsp;reserved. </p>
    </div>
     );
}

export default FooterContent;