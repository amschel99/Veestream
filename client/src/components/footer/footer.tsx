import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Useful links</h4>
            <ul>
              <li><a href="https://rapidapi.com/kariukiamschel9/api/veestream2">Documentation</a></li>
              <li><a href="/usecases">Usecases</a></li>
              <li><a href="/tos">privacy policy</a></li>
             
            </ul>
          </div>
          <div className="footer-col">
            <h4>Tutorials</h4>
            <ul>
              <li><a href="https://www.youtube.com/channel/UC0odtCXMbZ47necc_OXqD5Q">Youtube channel</a></li>
              <li><a href="https://amschel.veestream.tech/blog">Blog</a></li>

            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact us</h4>
            <ul>
              <li><a href="mailto://support@veestream.tech">Email us</a></li>
            
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">

              <a href="https://twitter.com/veestreamApi"><FontAwesomeIcon icon={faTwitter} /></a>

              <a href="https://linkedin.com/company/863/948/83"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
