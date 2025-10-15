import React, { useEffect, useState } from "react";

function FileList() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/files", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setFiles(data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { loadFiles(); }, []);

  const handleDownload = (f) => {
    if (f.metadata?.isPaid && !f.metadata?.canAccess) { alert("Paid file! Unlock first."); return; }
    window.open(`http://localhost:5000/api/files/download/${f._id}`, "_blank");
  };

  return (
    <div className="container">
      <h2>Available Files</h2>
      {files.length === 0 ? <p>No files uploaded yet.</p> :
        <ul>
          {files.map((f) => (
            <li key={f._id}>
              {f.filename} ({f.metadata?.mimeType || "unknown"})
              <button onClick={() => handleDownload(f)}>
                {f.metadata?.isPaid && !f.metadata?.canAccess ? "Unlock" : "Download"}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default FileList;
