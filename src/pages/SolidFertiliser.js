import React from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import "../components/services.css";

const SolidFertiliser = () => {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div class="dom-sec6-box3">
          <div class="dom-sec6-box3-left">
            <div class="dom-sec6-box3-left-inner">
              <div class="dom-sec6-box3-left-h">SOLID FERTLISERS</div>
              <div class="dom-sec6-box3-left-p">
                Elevate your farming practices with our top-quality solid
                fertilizers at Schwifty. Our expertly crafted formulations
                provide a balanced mix of nutrients to enhance soil fertility
                and promote vigorous plant growth. Experience improved crop
                yields and nutrient-rich soil with our reliable solid
                fertilizers.
              </div>
            </div>
          </div>
          <div class="dom-sec6-box3-right"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolidFertiliser;
