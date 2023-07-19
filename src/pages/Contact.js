import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdLocationPin, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import './contact.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
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
    <>
    <Navbar/>
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">

          <div className="contact-box">
            <div className="contact-icon">
              <MdLocationPin />
            </div>
            <div className="contact-text">Schwifty Agro Dairy Pvt Lmt <br />
            T-7, Oberoi Apartment-2, Shyam Nath Marg, Civil Lines 
            New Delhi, 110054</div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">
              <MdOutlinePhone />
            </div>
            <div className="contact-text">+91-8826882623</div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">
              <MdOutlineEmail />
            </div>
            <div className="contact-text">info@schwifty.farm</div>
          </div>

        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label className="contact-lable">Name</label>
            <input className="contact-input" type="text" name="user_name" required />

            <label className="contact-lable">Phone Number</label>
            <input className="contact-input" type="tel" id="phone" name="phone" required />

            <label className="contact-lable">Email</label>
            <input className="contact-input" type="email" name="user_email" required />

            <label className="contact-lable">Message</label>
            <textarea className="contact-message" type="text" name="message" required />

            <input className="contact-button" type="submit" value="Send" />
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
    <Footer/>
    </>
    
  );
};

export default Contact;
