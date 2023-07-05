import React, { Component } from 'react';
import './footer/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="footer-container">
        <div className="left-col">
          <ul>
            <li className="Privacy-policy">Privacy Policy</li>
            <li className='Terms-of-use'>Terms Of Use</li>
            <li className='Contact-us'>Contact Us</li>
          </ul>
          </div>
          <div className='right-col'>
            <p>© 2022–2023 Heeds Foundation. All rights reserved. Site by Ayush & Anish</p></div>
          </div>
    </footer>
    );
  }
}

export default Footer;
