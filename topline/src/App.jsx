import React, { useEffect, useState } from "react";
import './App.css';
import './index.css';
import ReviewBelt from './carousel.jsx';
import { Element, scrollSpy, Events, Link as ScrollLink } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [activeSection, setActiveSection] = useState("section1");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

  }, []);

  const [activePackage, setActivePackage] = useState("Basic Package");

  const packageDescriptions = {
    "Basic Package": "Exterior wash and wax.",
    "Premium Package": "Exterior wash and wax, Interior vacuum and cleaning, Engine bay cleaning, Wheel and tire cleaning, Headlight restoration, Clay bar treatment, Paint correction (if needed)",
    "Ceramic Coating": "Premier ceramic coating to make the car shine like new."
  };


  {/*} This here is for smooth transistions between the packgagenav: */}
  const handlePackageChange = pkg => {
    if (pkg === activePackage) return;
    setFading(true);
    setTimeout(() => {
      setActivePackage(pkg);
      setFading(false);
    }, 200);
  };

  return (
    <div>
      {/*  old header
      <header className="Title">
        <div className="spacer">
          <h1>Top Line Detailing</h1>
        </div>
        <hr />
      </header>*/}

      {/* Sections */}
      <Element name="section1" className="section section1">
        <h1>Top Line Detailing</h1>
        <h4>
          Car Detailing Done Right.
        </h4>
        <ScrollLink
          to="section2"
          smooth={true}
          duration={500}
          className="bookNowButton"
        >
          <p>Book a Detail Now!</p>
        </ScrollLink>
      </Element>

      <Element name="section2" className="section section2">
        <div className="BookTitle">
          <h2>Choose from one of our Services!</h2>
        </div>
        <div className="packageView">
          <div className="packageNav">
            {["Basic Package", "Premium Package", "Ceramic Coating"].map((pkg) => (
              <button
                key={pkg}
                className={`packageLabel ${activePackage === pkg ? "active": ""}`}
                onClick={() => handlePackageChange(pkg)}
              >
                <h3 className="packageTitle">{pkg}</h3>
              </button>
            ))}
          </div>
          <div className={`packageDescriptions ${fading ? "fade" : ""}`}>
            <p>{packageDescriptions[activePackage]}</p>
            <a href="tel:1234567890" className="callLink">Call or Text for a Free Quote!</a>
          </div>
        </div>

        {/* Old code
        
        <div className="flexrow">
          <div className="Packages">
            <div className="PackageCard">
              <h2>Basic Package</h2>
              <ul>
                <li>Exterior wash and wax</li>
              </ul>
            </div>
            <div className="PackageCard">
              <h2>Premium Package</h2>
              <ul>
                <li>Exterior wash and wax</li>
                <li>Interior vacuum and cleaning</li>
                <li>Engine bay cleaning</li>
                <li>Wheel and tire cleaning</li>
                <li>Headlight restoration</li>
                <li>Clay bar treatment</li>
                <li>Paint correction (if needed)</li>
              </ul>
            </div>
            <div className="PackageCard">
              <h2>Ceramic Coating</h2>
              <ul>
                <li>High-quality ceramic coating application</li>
                <li>Long-lasting protection and shine</li>
              </ul>
            </div>

          </div>
        </div> */}
      </Element>

      <Element name="section3" className="section section3">
        <h2>Licensed and Insured</h2>
        <p>
          At Top Line Detailing, we take your trust seriously. We are fully licensed and insured, ensuring that every service we provide meets industry standards and legal requirements. Our insurance coverage protects your vehicle throughout the detailing process, giving you complete peace of mind. You can rest assured that your car is in safe, professional hands from start to finish.
        </p>
      </Element>

      <Element name="section4" className="section section4">
        <ReviewBelt />
      </Element>

      <Element name="section5" className="section section5">
        <h2>Have any Questions? Contact us!</h2>
        <p>Email: info@toplinedetailing.com</p>
        <p>Phone: (123) 456-7890</p>
      </Element>
      <div className="dot-nav">
        {[1, 2, 3, 4, 5].map((num) => (
          <ScrollLink
            key={num}
            activeClass="active"
            to={`section${num}`}
            spy={true}
            smooth={true}
            duration={500}
            className="dot"
          />
        ))}
      </div>
      <Analytics />
    </div>
  );
}

export default App;
