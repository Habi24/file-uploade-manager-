import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import FileList from "./pages/FileList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import './style.css';

function App() {
  return (
    <div
      className="app-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div className="content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/files" element={<FileList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>

      <footer
        style={{
          backgroundColor: "#222",
          color: "#fff",
          textAlign: "center",
          padding: "3px",
          borderTop: "3px solid #4da6ff",
          marginTop: "20px",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} FileUploader App. All rights reserved.
        </p>
        <p style={{ margin: 0 }}>
          Contact:{" "}
          <a
            href="mailto:support@fileuploader.com"
            style={{ color: "#4da6ff", textDecoration: "none" }}
          >
            <p> support@fileuploader.com</p>
             
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
