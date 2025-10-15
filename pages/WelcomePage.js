import React from "react";
import "../App.css";  

function WelcomePage() {
  return (
    <div className="welcome-container">
    

      <section id="about">
        <h2>About</h2>
        <p>
          This app allows users to log in, upload files, and manage uploads easily
          with a simple and user-friendly interface.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: Sk2026@example.com <br /> Phone: +91-8682026696
        </p>
      </section>
    </div>
  );
}

export default WelcomePage;
