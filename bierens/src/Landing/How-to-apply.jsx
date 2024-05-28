import React, { useState } from "react";
import "./Landing-apply.css";
import RightSideImg from "./Images/Right-side-img.png";

// Popup component
function Popup({ handleClose }) {
  const handleCloseClick = () => {
    handleClose();
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

function Howtoapply() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {
    if (isValidEmail && !submitting) {
      setSubmitting(true);
      // Simulate form submission process
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual submission code
      setSubmitting(false);
      setShowPopup(true); // Show popup after form submission
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
            disabled={submitting || !email.trim()}
            className={submitting || !email.trim() ? "disabled-button" : ""}
          >
            {submitting ? "Submitting..." : "Apply"}
          </button>
        </div>
        {!isValidEmail && (
          <p className="error-message">Please enter a valid email address</p>
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

export default Howtoapply;
