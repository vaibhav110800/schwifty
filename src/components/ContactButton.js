import React, { useState } from "react";
import "./contactButton.css";

const ContactButton = ({ position }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleHover = () => {
    setShowOptions(true);
  };

  const handleLeave = () => {
    setShowOptions(false);
  };

  return (
    <div
      className="button-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    //   style={{ position, bottom: 20, right: 20 }}
    >
      <button className="main-button">Contact</button>
      {showOptions && (
        <div className="button-options">
          <a href="tel:+918826882623" className="option-button">
            Phone
          </a>
          <a href="mailto:info@schwifty.farm" className="option-button">
            Email
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8826882623"
            className="option-button"
          >
            WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
