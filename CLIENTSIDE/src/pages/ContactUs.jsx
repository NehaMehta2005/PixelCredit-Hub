import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "./ContactUs.css";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = { ...formData };
    setSenderName(data.firstName);

    fetch("http://localhost:5500/submitContactForm/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
        // Clear form data
        setFormData({
          firstName: '',
          email: '',
          message: '',
        });
        // Display success message
        // window.alert("Your message is successfully sent to admin");
        // // Show confirmation options
         setShowConfirmation(true);
      })
      .catch((error) => console.error("Error:", error));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleConfirmationYes() {
    // Hide the success message and confirmation options
    setSubmitted(false);
    setShowConfirmation(false);
  }

  function handleConfirmationNo() {
    // Redirect to the home page (you may need to adjust the path)
    window.location.href = '/';
  }

  return (
    <div className="body">
      <h1>Reach Out and Connect</h1>
<br /><br />
      <div className="contactbackground">
        <div className="contact-form">
          <div>
            <form onSubmit={handleSubmit} method="POST">
              <div className="name">
                <input className="inputsize"
                  type="text"
                  placeholder="Your Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="email">
                <input className="inputsize"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="message">
                <textarea className="inputsize"
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="image">
            <img
              src="https://www.svgrepo.com/download/39559/message.svg"
              alt="no picture"
            />
          </div>
        </div>
        <br />
        <p className="sticker">
          <FontAwesomeIcon icon={faPhone} /> +1-2345-6789
        </p>
        <br />
        <p className="sticker">
          <FontAwesomeIcon icon={faEnvelope} /> pixelcredithub@gmail.com
        </p>
        <br />
        <p className="sticker">
          <FontAwesomeIcon icon={faMapMarker} /> 123 Ave, Germany, Berlin
        </p>
      </div>
      {submitted && (
        <div>
          <p className="success-message">
            Thanks for your message, {senderName}! It is always nice to hear from you. We will get back to you.
          </p>
          {showConfirmation && (
            <div className="confirmation-options">
              <p>Do you have a new message?</p>
              <button onClick={handleConfirmationYes}>Yes</button>
              <button onClick={handleConfirmationNo}>No</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContactUs;

