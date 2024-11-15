//import React from 'react'
import "./Service.css";
import service1 from "../../../public/Service1.png";
import service2 from "../../../public/Service2.png";
import service3 from "../../../public/Service3.png";
import service4 from "../../../public/Service4.png";
import service5 from "../../../public/Service5.png";
import service6 from "../../../public/Service6.png";

function Service() {
  return (
    <>
    <div>
      <div className="container-services">
        <h1 className="container-h1-service">
          All services
        </h1>
        <h2 className="container-h2-service">Trusted For Our Services</h2>
        </div>
        </div>
        <div className="Wrapper">
          <div>
            <img className="service1" src={service1} alt="" />
            <h1 className="service2">01</h1>
            <h2 className="service3">Transportation</h2>
            <summary className="service4">
              We provide coordinated transported shipment solutions throughout the consign and assure the speedy delivery.
            </summary>
            <h3 className="service5">View Detail</h3>
          </div>
          <div>
            <img className="service1" src={service2} alt="" />
            <h1 className="service2">02</h1>
            <h2 className="service3">Sea Shipment</h2>
            <summary className="service4">
            We make sure that your shipments are dispatched and received carefully through-out the process.
            </summary>
            <h3 className="service5">View Detail</h3>
          </div>
          <div>
          <img className="service1" src={service3} alt="" />
          <h1 className="service2">03</h1>
          <h2 className="service3">Air Shipment</h2>
          <summary className="service4">
          We provide on-time delivery of all air shipments and also tackles custom clearance duties for you.
          </summary>
          <h3 className="service5">View Detail</h3>
          </div>
          <div>
            <img className="service1" src={service4} alt="" />
            <h1 className="service2">04</h1>
            <h2 className="service3">Ware Housing and Distribution</h2>
            <summary className="service4">
            We provide numerous square meter storage, distribution, and consolidation centers to support a number of industries.
            </summary>
            <h3 className="service5">View Detail</h3>
          </div>
          <div>
            <img className="service1" src={service5} alt="" />
            <h1 className="service2">05</h1>
            <h2 className="service3">Custom Clearance</h2>
            <summary className="service4">
            You may rely on our company to provide assistance regardless of where your imports or exports are coming from or going to. We will streamline the import and export procedure from start to finish.
            </summary>
            <h3 className="service5">View Detail</h3>
          </div>
          <div>
            <img className="service1" src={service6} alt="" />
            <h1 className="service2">06</h1>
            <h2 className="service3">Door to Door Delivery</h2>
            <summary className="service4">
            It eliminates the need for resource and fleet management because we will handle every step of the fulfilment process for you.
            </summary>
            <h3 className="service5">View Detail</h3>
          </div>
        </div>
    </>
  )
}

export default Service;