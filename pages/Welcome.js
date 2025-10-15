import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <h1>Welcome to the File Uploader</h1>
      <p>Upload and manage your files easily!</p>
      <button onClick={() => navigate("/upload")}>Get Started</button>


    </div>
  );
}

export default Welcome;
