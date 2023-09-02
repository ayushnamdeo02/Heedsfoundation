import React, { Component } from 'react';
import './footer/footer.css';
import privacy from './PrivacyPolicy_heedsfoundation.pdf'
import TnC from './Termsandcondition_heeedsfoundation.pdf'
import FAQ from './FAQ_Heedsfoundation.pdf'

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="footer-container">
        <div className="left-col">
          <ul>
            <li className="Privacy-policy"><a href={privacy}>Privacy Policy</a></li>
            <li className='Terms-of-use'><a href={TnC}>Terms Of Use</a></li>
            <li className='Contact-us'><a href={FAQ}>FAQ</a></li>
          </ul>
          </div>
          <div className='right-col'>
            <p>© 2022–2023 Heeds Foundation.</p><p> All rights reserved.</p><p> Designed & Developed by Ayush & Anish</p></div>
          </div>
    </footer>
    );
  }
}

export default Footer;
