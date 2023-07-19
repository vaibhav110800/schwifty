import React from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import "../components/services.css";

const LiquidFertiliser = () => {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div class="dom-sec6-box2">
          <div class="dom-sec6-box2-left"></div>
          <div class="dom-sec6-box2-right">
            <div class="dom-sec6-box2-right-inner">
              <div class="dom-sec6-box2-right-h">LIQUID FERTILISERS</div>
              <div class="dom-sec6-box2-right-p">
                Boost your crop's growth and fertility with our premium liquid
                fertilizers at Schwifty. Our carefully formulated blends deliver
                essential nutrients directly to the plants for maximum
                absorption and efficiency. Experience higher yields and
                healthier crops with our high-quality liquid fertilizers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiquidFertiliser;
