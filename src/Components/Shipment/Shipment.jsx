//import React from 'react';
import "./Shipment.css";
import Shipment1 from "../../../public/shipment-1.png";
import Shipment2 from "../../../public/shipment-2.png";
import Shipment3 from "../../../public/shipment-3.png";
function Shipment() {
  return (
    <>
  
    <div className="Shipment-main">
        <h1 className="Shipment-h1">Company Approch</h1>
        <h2 className="Shipment-h2">Reliable Logistic & Transport <br /> Solutions</h2>
        
            <button className="Shipment-button">
                <h1 className="shipment-btn-h1">
                Read More
                </h1>
            </button>
    </div>
    <div className="Shipment-Section">
    <div className="Shipment-border">
    <h1 className="Shipment-border-h1">15</h1>
    <h2 className="Shipment-border-h2">Year’s of experience in transport and logistics services</h2>
    <div className="Shipment-images">
    <div>
        <img className="shipment-logos" src={Shipment1} alt="" />
        <h1 className="logo-h1">195+</h1>
        <h2 className="logo-h2">Professional Staff</h2>
      </div>
      <div>
        <img className="shipment-logos" src={Shipment2} alt="" />
        <h1 className="logo-h1">250+</h1>
        <h2 className="logo-h2">On Time Delievery</h2>
      </div>
      <div>
        <img className="shipment-logos" src={Shipment3} alt="" />
        <h1 className="logo-h1">50+</h1>
        <h2 className="logo-h2">Prestigious Clients</h2>
      </div>
    </div>
    </div>
    <div>
    </div>
    </div>
    </>
  )
}

export default Shipment
