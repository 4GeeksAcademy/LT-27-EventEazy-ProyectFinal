import React from "react";
import "../../styles/footer.css"

export const Footer = () => (
  <footer className="footer m-5 py-3 text-center">
    <div className="container">
      <div className="d-flex justify-content-around flex-wrap">
        <div className="contact-info m-3">
          <h5>Contact Information</h5>
          <p>Address: 123 Celebration St, Party City, México</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@eventeazy.com</p>
        </div>
        <div className="links m-3">
          <h5>Important Links</h5>
          <a href="#about">About Us</a><br />
          <a href="#services">Services</a><br />
          <a href="#blog">Blog</a><br />
          <a href="#contact">Contact</a>
        </div>
        <div className="legal-links m-3">
          <h5>Legal Links</h5>
          <a href="#terms">Terms and Conditions</a><br />
          <a href="#privacy">Privacy Policy</a><br />
          <a href="#cookies">Cookie Policy</a>
        </div>
        <div className="social-icons m-3">
          <h5>Follow Us</h5>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="newsletter m-3">
          <h5>Subscribe to Our Newsletter</h5>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Your email address" className="form-control" />
            <button type="submit" className="btn btn-primary mt-2 " style={{background:"#00ADB5"}}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="credits mt-5">
        <i className="bi bi-r-circle">Event Eazy 2024</i>
        <p>
          Made with <i className="fa fa-heart text-danger" /> by{" "}
          <a href="https://github.com/RicardoMiguelR">Ricardo Miguel R</a> &
          <a href="https://github.com/KarenRubio">Karen Rubio</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
