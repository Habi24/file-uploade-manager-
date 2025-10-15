import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]); // always array
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  
  const handleFileChange = (e) => setFile(e.target.files[0]);

  
  const handleUpload = async () => {
    if (!file) { 
      alert("Select a file first!"); 
      return; 
    }

    const token = localStorage.getItem("token");
    if (!token) { 
      alert("Login first!"); 
      navigate("/login"); 
      return; 
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("isPaid", false); // default free

      const res = await fetch("http://localhost:5000/api/files/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }, // do NOT set Content-Type manually
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Upload successful!");
        setFile(null);
        setProgress(0);
        if (fileInputRef.current) fileInputRef.current.value = "";
        loadFiles(); 
      } else {
        alert(data.message || "Upload failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    }
  };

  
  const loadFiles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/files", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setUploadedFiles(Array.isArray(data) ? data : data.files || []);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadFiles(); }, []);

  
  const handleDownload = (f) => {
    if (f.metadata?.isPaid && !f.metadata?.canAccess) {
      alert("Paid file! Unlock first.");
      return;
    }
    window.open(`http://localhost:5000/api/files/download/${f._id}`, "_blank");
  };

  return (
    <div className="container">
      <div className="upload-box">
        <h2>Upload Files</h2>
        <div className="drop-area">
          <p>Drag & Drop or select files</p>
          <button onClick={() => fileInputRef.current.click()}>Browse Files</button>
          <input type="file" ref={fileInputRef} hidden onChange={handleFileChange} />
        </div>

        {progress > 0 && <p>Uploading: {progress}%</p>}

        <button onClick={handleUpload}>Submit</button>
      </div>

      <div className="uploaded-box">
        <h2>Uploaded Files</h2>
        {uploadedFiles.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <ul>
            {uploadedFiles.map((f) => (
              <li key={f._id}>
                {f.filename}{" "}
                <button onClick={() => handleDownload(f)}>
                  {f.metadata?.isPaid && !f.metadata?.canAccess ? "Unlock" : "Download"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Upload;
