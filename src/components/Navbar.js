import React from 'react'
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
       <div>
        <h1>SHWIFTY</h1>
       </div>

       <div>
            <ul className={styles.navbar}>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About Us</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">Contact</a></li>

            </ul>
       </div>
       <div className={styles.mobile}>
          <i className="GiHamburgerMenu"></i>
          <i className="AiOutlineClose"></i>

       </div>


    </nav>
  )
}

export default Navbar