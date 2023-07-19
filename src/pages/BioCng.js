import React from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import "../components/services.css";

const BioCng = () => {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div class="dom-sec6-box1">
          <div class="dom-sec6-box1-left">
            <div class="dom-sec6-box1-left-inner">
              <div class="dom-sec6-box1-left-h">BIO CNG</div>
              <div class="dom-sec6-box1-left-p">
                Discover the power of bio CNG at Schwifty. Our innovative
                technology converts organic waste into clean and renewable
                compressed natural gas. Join us in reducing carbon emissions and
                promoting a circular economy for a sustainable future.
                Experience the benefits of eco-friendly fuel with our bio CNG
                solutions. Contact us today to learn more.
              </div>
            </div>
          </div>
          <div class="dom-sec6-box1-right"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BioCng;
