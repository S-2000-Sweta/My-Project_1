import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Have questions? We're here to help! Reach out to us at:
        </p>
        <p>
          <strong>Email:</strong> support@example.com <br />
          <strong>Phone:</strong> +123 456 7890 <br />
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </div>
    </div>
  );
}

export default Contact;
