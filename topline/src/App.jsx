import React from "react";
import './App.css';
import './index.css';
import ReviewBelt from './carousel.jsx';
import Book from './book.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className="Title">
        <h1>Topline Detailing</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <div className="Footer">
        <p>Questions? Contact us at <a href="mailto:toplinedetailing@gmail.com">toplinedetailing@gmail.com</a> or <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <main>
      <div className="Content">
        <h3>Welcome to Top Line Detailing! We look forward to giving you a premium detailing experience.</h3>
        <Link to="/book" className="bookNowButton"><p>Book a Detail Now!</p></Link>
      </div>
      <div className="Licensed">
        <h2>Licensed and Insured</h2>
        <p>
          At Top Line Detailing, we take your trust seriously. We are fully licensed and insured, ensuring that every service we provide meets industry standards and legal requirements. Our insurance coverage protects your vehicle throughout the detailing process, giving you complete peace of mind. You can rest assured that your car is in safe, professional hands from start to finish.
        </p>
      </div>
      {/* top services - Ceramic Coating, Detailing */}
      <div className="Testimonials">
        <div className="flewrow">
          <ReviewBelt />
        </div>
      </div>
    </main>
  )
}

export default App;