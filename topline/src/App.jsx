import React from "react";
import './App.css';
import './index.css';

function App() {
  return (
    <main>
      <div className="Header">
        <h1>Top Line Detailing</h1>
      </div>
      <div className="Content">
        <h3>Welcome to Top Line Detailing! We look forward to giving you a premium detailing experience.</h3>
        <button >
          <p>Book a Detail Now!</p>
        </button>
      </div>
      <div className="Testimonials">
        <h2>See What Our Customers Are Saying!</h2>
        



      </div>
      <div className="Footer">
        <p>Questions? Contact us at <a href="mailto:toplinedetailing@gmail.com">toplinedetailing@gmail.com</a> or <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>
    </main>
  )
}

export default App;