import React from "react";

function About() {
  return (
    <div className="welcome-container">
      <h1>About</h1>
      <p>Our platform is designed to provide a secure and user-friendly way to manage digital files. 
        Users can easily sign up, log in, and access a personalized dashboard to upload, preview, download, and organize their documents. 
        The system supports multiple file types such as images, PDFs, Word documents, and presentations, ensuring flexibility for different needs.To maintain security, authentication is implemented with role-based access, allowing only authorized users to view or edit files. Uploaded files are stored in a structured manner using MongoDB, making retrieval efficient and reliable. Additionally, the system offers features such as categorized file storage, download tracking, and a clean, intuitive interface to improve the overall user experience.</p>
    </div>
  );
}

export default About;
