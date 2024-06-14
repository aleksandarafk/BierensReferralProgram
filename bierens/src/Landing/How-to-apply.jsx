import React, { useState } from "react"; // Import React
import "./Landing-apply.css"; // Import the CSS 
import RightSideImg from "./Images/Right-side-img.png"; // Import the image

// Popup component
function Popup({ handleClose }) {
  const handleCloseClick = () => {
    handleClose(); // Call the handleClose function 
    window.location.reload(); // Reload the page 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="popup-message">Thank you for your application!</p>
        <button className="popup-close" onClick={handleCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
}

// Main component for the application form
function Howtoapply() {
  const [email, setEmail] = useState(""); // email input
  const [isValidEmail, setIsValidEmail] = useState(true); // Valid email?
  const [submitting, setSubmitting] = useState(false); // submission
  const [showPopup, setShowPopup] = useState(false); 
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail); // Update email state
    setIsValidEmail(validateEmail(inputEmail)); // Validate email and update state
  };

  // Function to validate the email 
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email validation
    return emailPattern.test(email);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (isValidEmail && !submitting) {
      setSubmitting(true); 
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s delay
      setSubmitting(false); 
      setShowPopup(true); // Show popup after form submission
    }
  };

  // closing popup
  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    window.location.reload(); // Reload the page
  };

  return (
    <div className="How-to-apply">
      <div className="How-to-apply-text">
        <h1>
          Refer, <span className="Earn">Earn,</span> Repeat.
        </h1>
        <p>
          Apply today for the chance of being accepted into our B2B referral
          program. Earn special perks and rewards based on your referral
          performance.
        </p>
        <div className="Email-and-Button">
          <input
            type="text"
            className={`email ${isValidEmail ? "" : "invalid"}`}
            name="email"
            placeholder="example@bierens.com"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            onClick={handleSubmit}
            disabled={submitting || !email.trim()} // Disable button if submitting or email is empty
            className={submitting || !email.trim() ? "disabled-button" : ""} // Apply disabled-button 
          >
            {submitting ? "Submitting..." : "Apply"}  
          </button>
        </div>
        
        {!isValidEmail && (
          <p className="error-message">Please enter a valid email address</p> // error message if email is not correct
        )}
      </div>
      <div>
        <img className="RightImg" src={RightSideImg} alt="img" /> 
      </div>
      {/* Popup component */}
      {showPopup && <Popup handleClose={handleClosePopup} />} 
    </div>
  );
}

export default Howtoapply; // Export the component for use in other parts of the app
