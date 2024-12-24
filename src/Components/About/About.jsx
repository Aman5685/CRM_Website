//import React from 'react';
import "./About.css";
import divright from"../../../public/CustomStores.png";
import lasticon from"../../../public/home icons last.png";
function About() {
  return (
    <>
    <div className="container">
      <div className="maindiv">
      <div className="divleft">
      <h1>Why Choose Us</h1>
      <h2>We Are Professional Logistics & cargo Agency</h2>
      <p className="para1">Aarsan Shipping and Logistics is located in Delhi NCR and Gujrat, it operates and provides great transportation and supply-chain management for large to any medium-sized national and multinational companies.</p>
      <strong className="strong">
      Thanks to our fantastic team, which operates in many locations and drop-shipped in more than 25 countries, Aarsan Logistics offers a wide range of services in all types of land, sea, and air transportation as well as managing warehouse and distribution. Mainly we are International Trade Forwarders in various ports located in the country and specialize in custom clearance of steel coils. We have a renowned name in well-known ports like Mundra, ICD /TKD, Nhava Sheva, Chennai Port. ACTL, Faridabad and Dadri. We have a big staff of agents in numerous counties as well.
      </strong>
      <button className="Leftbutton"> <span>Learn More</span> <em></em> </button>
      <span className="Leftsignature">Signature</span>
      <h4 className="Lefth4">Logistics</h4>
      </div>
      <div className="divright">
      <img className="right-img" src={divright} alt="" />
      </div>
      <div>
        <img  className="last-icon" src={lasticon} alt="" />
      </div>
      </div>
      <div className="tw-any-help-inner">
        <span className="tw-24">24/7 Active Suport Team</span>
        <br />
        <span className="tw-help-title">Need Immediate Support Or Any Help?</span>
        <br />
        <span className="tw-help-number">(+91 780 008 0638)</span>
      </div>
      </div>
    </>

  )
}

export default About