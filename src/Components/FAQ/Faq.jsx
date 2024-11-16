//import React from 'react';
import "./Faq.css";
import leftpic from"../../../public/FAQ-image-left.png";
import leftpic1 from "../../../public/FAQ-image-right.png";
import leftpic2 from"../../../public/FAQ-image-right1.png";
function Faq() {
  return (
    <>
    <div>
    <div className="FAQ-main-div">
        <h1 className="FAQ-main-div-h1">Request A Quote</h1>
        <h2 className="FAQ-main-div-h2">Booking For Product Transformation</h2>
        <summary className="FAQ-main-div-summary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
        </summary>
    </div>
    <div className="FAQ-main-bottom">
    <div className="FAQ-main-left-section">
        <img src={leftpic} alt="" />
        <div>
            <img className="leftpic1" src={leftpic1} 
            alt="" />
            <h1 className="leftpic1-h1">Request A Quote</h1>
        </div>
        <div>
            <img className="leftpic2" src={leftpic2} alt="" />
            <h2 className="leftpic-h2">Track & trace</h2>
        </div>
    </div>
    <div className="FAQ-right-form">
        <form action="/server">
        <input type="text" 
        placeholder="Name"
        className="FAQ-form-fields"
        />
        <input type="email" 
        placeholder="Email"
        className="FAQ-form-fields"
        />
        <br />
        <input type="number" 
        placeholder="Phone"
        className="FAQ-form-fields"
        />
        <input type="text"
        placeholder="Subject"
        className="FAQ-form-fields"
        />
        <br />
        <input type="message" 
        placeholder="Message"
        className="FAQ-form-fields-message"
        />
        <br />
        <button type="submit" className="FAQ-form-submitbtn"
        ><h5>
            Submit Now 
            </h5></button>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Faq