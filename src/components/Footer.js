import React from "react";
import "./footer.css";
import Brand from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { MdLocationPin, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer class="footer-distributed">
        <div class="footer-left">
          <img className="footer-logo" src={Brand} alt="" />

          <p class="footer-links">
            <div class="link-1">
              <NavLink to="/">Home</NavLink>
            </div>

            <div>
              <NavLink to="/bio-cng">Bio-CNG</NavLink>
            </div>

            <div>
              <NavLink to="/solid-fertiliser">Solid Fertiliser</NavLink>
            </div>

            <div>
              <NavLink to="/liquid-fertiliser">Liquid Fertiliser</NavLink>
            </div>

            <div>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </p>

          <p class="footer-company-name">Schwifty © 2023</p>
        </div>

        <div class="footer-center">
          <div className="footer-box">
            <div className="footer-icon">
              <MdLocationPin />
            </div>
            <div className="footer-text">
              Schwifty Agro Dairy Pvt Lmt <br />
              T-7, Oberoi Apartment-2, Shyam Nath Marg, Civil Lines New Delhi,
              110054
            </div>
          </div>

          <div className="footer-box">
            <div className="footer-icon">
              <MdOutlinePhone />
            </div>
            <div className="footer-text">+91-8826882623</div>
          </div>

          <div className="footer-box">
            <div className="footer-icon">
              <MdOutlineEmail />
            </div>
            <div className="footer-text">info@schwifty.farm</div>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Greening agriculture with bio CNG solid fertilizers for higher yields, lower emissions.
          </p>

          {/* <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
