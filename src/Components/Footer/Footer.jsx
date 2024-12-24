//import React from 'react';
import "./Footer.css"
import footer1 from "../../../public/footerimg1.png";
import footerlogo from "../../../public/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="container">
    <div className="footer-container">
        <div>
          <img className="footer-img" src={footer1} alt="" />
        </div>
        <div className="Footer-content">
          <h1 className="footer-content-h1">Subscribe for offers and news</h1>
          <div>
          <input type="Email" 
          placeholder="Enter your mail"
          className="footer-input-mail"
          />
          </div>
          <div>
          <button className="footer-button">
            <h3>Subscribe Now</h3>
          </button>
          </div>
        </div>
    </div>
    <div className="Footer-Last-Content">
      <img className="Footer-last-image" src={footerlogo} alt="" />
      <div className="Footer-last-Details">
      <p className="Footer-last-p">Many desktop publishing packages and web page editors now use are dolra Ipsum as their default .</p>
      <div className="Footer-last-icons">
      <button className="Button-icons"><FaFacebookF /></button>
      <button className="Button-icons"><FaTwitter /></button>
      <button className="Button-icons"><FaInstagram /></button>
      <button className="Button-icons"><FaYoutube /></button>
      </div>
          <div className="Footer-last-Quick">
          <h1 className="Footer-last-Quick-h1">Quick Links</h1>
          <hr />
          <ul className="Footer-last-li">
            <li className="list-hover" >About</li>
            <li className="list-hover" >Tracking</li>
            <li className="list-hover" >FAQ</li>
            <li className="list-hover" >Contact Us</li>
          </ul>
          </div>
          <div className="Footer-last-shipping-h1">
          <h1 className="Footer-last-service-h1">Shipping Services</h1>
          <hr />
          <ul className="Footer-last-li">
          <li className="list-hover">Transportation</li>
          <li className="list-hover">Sea Shipment</li>
          <li className="list-hover">Air Shipment</li>
          <li className="list-hover">Warehousing & Distribution</li>
          </ul>
          </div>
          <div className="Footer-last-services-h1">
          <h1 className="Footer-last-service-h1">Services</h1>
          <hr />
          <ul className="Footer-last-li">
            <li className="list-hover">Custom Clearance</li>
            <li className="list-hover">Door to Door Delivery</li>
            <li className="list-hover">Testimonials</li>
            <li className="list-hover">Track Your Shipment</li>
          </ul>
          </div>
          </div>
          <div className="footer-hr">
            <hr />
          </div>
          <h3 className="footer-hr-h3">© 2022 Aarsan Shipping Services Pvt. Ltd. All Rights Reserved | Made with <span className="footer-hr-heart"><FaHeart /></span> By <span className="footer-hr-span">Aman Yadav</span></h3>
    </div>
    </div>
    </>
  )
}

export default Footer