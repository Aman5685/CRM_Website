// import React from 'react';
import "./Navbar.css"
import pcs from "../../../public/logo.png";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
  return (
    <>
    <header className="header">
        <div>
            <img className="logo" src={pcs} alt="" />
        </div>
            <ul className="menu">
                <li className="menus"><a href="#home" className="text">Home</a></li>
                <li className="menus"><a href="#about" className="text">About</a></li>
                <li className="menus"><a href="#service" className="text">Service</a></li>
                <li className="menus"><a href="#track your shipment" className="text">Track your shipment</a></li>
                <li className="menus"><a href="#faq" className="text">FAQ</a></li>
                <li className="menus"><a href="#Contact" className="text">Contact</a></li>
                <li className="menus"><a href="#call" className="text">Free call in India 7800080638 <FiPhoneCall />
                </a></li>
            </ul>
    </header>
    <section>
        <div>
            <img src="/public/back-image.jpg" alt="back" height="50%" width="100%"/>
        </div>
    </section>
    </>
  )
}

export default Navbar
