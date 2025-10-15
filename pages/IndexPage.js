import React, { useState } from "react";

export default function IndexPage() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#4285f4", minHeight: "100vh", color: "white" }}>
      <h1>Upload Files</h1>
      <input type="file" multiple onChange={handleFileChange} /><br /><br />
      <h3>Uploaded Files Preview:</h3>
      <ul>
        {files.length > 0 ? files.map((file, index) => <li key={index}>{file.name}</li>) : <p>No files uploaded</p>}
      </ul>
    </div>
  );
}
