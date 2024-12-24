//import React from 'react';
import "./Contact.css";
import client1 from "../../../public/client image1.png";
import client2 from "../../../public/client image2.png";
import client3 from "../../../public/client image3.png";
import client4 from "../../../public/client image4.png";
import client5 from "../../../public/client image5.png";
import client6 from "../../../public/client image6.png";
import clientright1 from "../../../public/client right1.jpg";
import clientright2 from "../../../public/client right2.jpg";
import clientright3 from "../../../public/client right3.jpg";
import clientrightlogo from "../../../public/client rightlogo4.jpg";
function Contact() {
  return (
    <>
    <div className="container">
    <div className="Contact-container">
        <div className="Contact-main-header">
            <div>
            <h1 className="Contact-main-h1">Respected</h1>
            <h2 className="Contact-main-h2">Clients & partners</h2>
            </div>
            <div className="Contact-grid">
                <div>
                    <img src={client1} alt="" />
                </div>
                <div>
                    <img src={client2} alt="" />
                </div>
                <div>
                    <img src={client3} alt="" />
                </div>
                <div>
                    <img src={client4} alt="" />
                </div>
                <div>
                    <img src={client5} alt="" />
                </div>
                <div>
                    <img src={client6} alt="" />
                </div>
            </div>
        </div>
        <div className="Contact-right-section">
            <div className="Contact-right-section-inside-border">
                <div>
                    <img className="clientright1" src={clientright1} alt=""/>
                </div>
                <div>
                    <img className="clientright2" src={clientright2} alt="" />
                </div>
                <div>
                    <img className="clientright3" src={clientright3} alt="" />
                </div>
                <div>
                    <img className="client-right-logo" src={clientrightlogo} alt="" />
                </div>
                <div className="clientright-summary">
                    <p>
                        My experience with AARSAN has been excellent;
                        they are simple to work with, don`t delay shipment,
                        and provided the best and most reasonable freight prices
                        compared to the competition.Because of their top superb
                        organization and services, which simply provide the finest
                        to their consumers,my enormous purchase of steel coils arrived
                        to me without any trouble, and the customs clearance was completed
                        in only one day. I`am really delighted to work with you.
                    </p>
                    <h1 className="clientright-h1">Aman Yadav</h1>
                    <h2 className="clientright-h2">Padia Export Pvt.Ltd.</h2> 
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
