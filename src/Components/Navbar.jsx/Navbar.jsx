/// import React from 'react';
import "./Navbar.css"
import pcs from "../../../public/logo.png";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="dflex align-items-center">
                <div className="logo">
                    <img src={pcs} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#home" className="text">Home</a></li>
                        <li><a href="#about" className="text">About</a></li>
                        <li><a href="#service" className="text">Service</a></li>
                        <li><a href="#track your shipment" className="text">Track your shipment</a></li>
                        <li><a href="#faq" className="text">FAQ</a></li>
                        <li><a href="#Contact" className="text">Contact</a></li>                
                        <li><a href="#call" className="text">Free call in India 7800080638 <FiPhoneCall />
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    {/*Home Page*/}
    <section className="slider">
        <img src="/public/back-image.jpg" alt="back"/>
        <div className="slider-overlay">
            <div className="container">
                <div className="dflex">
                    <div className="cust-col-md-6">
                        <h1>Around <span> <br />the world</span></h1>
                        <p>There are many variations of passages of worem
                            lpsum available, but the majority
                        </p>
                       <div className="btn">
                        <br />
                       <button>View Details</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar
