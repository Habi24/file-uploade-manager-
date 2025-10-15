import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FileUploader App. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:support@fileuploader.com">support@fileuploader.com</a>
      </p>
    </footer>
  );
}

export default Footer;
