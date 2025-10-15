import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/contact">📞 Contact</Link>
        <Link to="/files">📁 Files</Link>
        <Link to="/upload">📤 Upload</Link>
      </div>
      <div className="nav-right">
        {!token ? (
          <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/signup">📝 Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>🚪 Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
