import React from 'react';
import   classes from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={classes.footercontainer}>
      <div className={classes.footerinfo}>
        <div className={classes['opening-hours']}>
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday: 10am - 9pm</li>
            <li>Saturday: 11am - 10pm</li>
            <li>Sunday: 12pm - 8pm</li>
          </ul>
        </div>
        <div className={classes.contactinfo}>
          <h3>Contact Us</h3>
          <p>Pizza King</p>
          <p>123 Main St</p>
          <p>Kerala, INDIA</p>
          <p>555-555-5555</p>
        </div>
      </div>
      <div className={classes.sociallinks}>
        <a href="#"><Image height='40' width='40' src='/img/face.png'/></a>
        <a href="#"><Image src='/img/insta.png' height='40' width='40'/></a>
        <a href="#"><Image src='/img/twitter.png' height='40' width='40'/></a>
      </div>
      <div className={classes.copyright}>
        <p>Copyright © 2023 Pizza King</p>
        <nav>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;