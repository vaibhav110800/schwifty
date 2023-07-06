import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdLocationPin, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import './footer.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rc7ja1s",
        "template_69xzg95",
        form.current,
        "cPowQy81g5RPoRa3f"
      )
      .then(
        (result) => {
          form.current.reset();
          toast.success("Message sent succesfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("Some Error Occured");
        }
      );
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">

          <div className="footer-box">
            <div className="footer-icon">
              <MdLocationPin />
            </div>
            <div className="footer-text">Schwifty Agro Dairy Pvt Lmt <br />
            T-7, Oberoi Apartment-2, Shyam Nath Marg, Civil Lines 
            New Delhi, 110054</div>
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

        <div className="footer-right">
          <form ref={form} onSubmit={sendEmail} className="footer-form">
            <label className="footer-lable">Name</label>
            <input className="footer-input" type="text" name="user_name" required />

            <label className="footer-lable">Phone Number</label>
            <input className="footer-input" type="tel" id="phone" name="phone" required />

            <label className="footer-lable">Email</label>
            <input className="footer-input" type="email" name="user_email" required />

            <label className="footer-lable">Message</label>
            <textarea className="footer-message" type="text" name="message" required />

            <input className="footer-button" type="submit" value="Send" />
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Footer;
