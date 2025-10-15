import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome-container">
      <h1>Welcome to File Uploader</h1>
      <p>Upload and manage your files easily!</p>

      <Link to="/upload">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
