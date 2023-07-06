import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logobgclear.png';
import linkedin from '../images/linkedin-logo.png';
import instagram from '../images/Instagram-Logo.png';
import twitter from '../images/twitter-logo.png';
import './Navbar/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className={`navbar-container ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar-left">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-mid">
          <button className="menu-button" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-list ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/squad">
                Squads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="social-media-button">
            <li>
              <a href="https://www.linkedin.com/company/heeds-foundation/" className="linkedin">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className="instagram">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Heedsfoundation?s=08" className="twitter">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
