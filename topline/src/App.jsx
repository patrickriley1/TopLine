import React, { useEffect } from "react";
import './App.css';
import './index.css';
import ReviewBelt from './carousel.jsx';
import Book from './book.jsx';
import { Element, scrollSpy, Events, Link as ScrollLink } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
  }, []);

  return (
    <div>
      {/* Fixed header */}
      <header className="Title">
        <div className="spacer">
          <h1>Top Line Detailing</h1>
        </div>
        <hr />
      </header>

      {/* Sections */}
      <Element name="section1" className="section section1">
        <h4>
          Welcome to Top Line Detailing! We look forward to giving you a premium detailing experience.
        </h4>
        <Link to="/book" className="bookNowButton">
          <p>Book a Detail Now!</p>
        </Link>
      </Element>

      <Element name="section2" className="section section2">
        <h2>Licensed and Insured</h2>
        <p>
          At Top Line Detailing, we take your trust seriously. We are fully licensed and insured, ensuring that every service we provide meets industry standards and legal requirements. Our insurance coverage protects your vehicle throughout the detailing process, giving you complete peace of mind. You can rest assured that your car is in safe, professional hands from start to finish.
        </p>
      </Element>

      <Element name="section3" className="section section3">
        <ReviewBelt />
      </Element>

      <Element name="section4" className="section section4">
        <h2>Have any Questions? Contact us!</h2>
        <p>Email: info@toplinedetailing.com</p>
        <p>Phone: (123) 456-7890</p>
      </Element>

      {/* Dot Navigation */}
      <div className="dot-nav">
        {[1, 2, 3, 4].map((num) => (
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
