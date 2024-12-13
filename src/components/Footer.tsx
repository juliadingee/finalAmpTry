// components/Footer.tsx

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h4>About Us</h4>
          <ul>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#team">Meet the Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h4>Services</h4>
          <ul>
            <li><a href="#grading">Boulder Grading</a></li>
            <li><a href="#analysis">AI Analysis</a></li>
            <li><a href="#training">Training Tips</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:info@climbai.com">Email Us</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#socials">Follow Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
