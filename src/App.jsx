//import React from 'react';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar.jsx/Navbar";
import Service from "./Components/Service/Service";
import Shipment from "./Components/Shipment/Shipment";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Shipment />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App;