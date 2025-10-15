import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="centered">
      <div className="box">
        <h1>🎉 Upload Complete!</h1>
        <p>Your files have been successfully uploaded.</p>

        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
