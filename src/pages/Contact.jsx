import React, { Component } from 'react';
import axios from 'axios';
import './contact/contact.css';
import logo from '../images/logobgclear.png';
import linkedin from '../images/linkedin-logo.png';
import instagram from '../images/Instagram-Logo.png';
import twitter from '../images/twitter-logo.png';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      isSubmitted: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = this.state;

    const formData = {
      name,
      email,
      phone,
      message
    };

    axios
      .post('https://sheetdb.io/api/v1/66yq7poktawt9', formData)
      .then((response) => {
        // Handle the response from the backend if needed
        console.log(response.data);
        this.setState({ isSubmitted: true }); // Set submission status to true
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });

    // Reset form fields after submission
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  render() {
    const { name, email, phone, message, isSubmitted } = this.state;

    return (
      <div className="container-contact">
        <div className="partition-contact">
          <div className="partition-left">
            <img src={logo} alt='logo'></img>
            <div className="contact-info">
              <h6>Contact No.</h6>
              <p>+91 8788411441</p>
              <p>+91 7987210406</p>
              <p>+91 8208048191</p>
              <p>+91 8668353016</p>
              <p>+91 9881250691</p>
              <h6>Email ID</h6>
              <p>heedsfoundation.ngo@gmail.com</p>
              <h6>Social Media Links:</h6>
              <ul className='social-media-button-contact'>
              <li><a href="https://www.linkedin.com/company/heeds-foundation/" className='linkedin'><img src={linkedin} alt="LinkedIn"></img></a></li>
              <li><a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className='instagram'><img src={instagram} alt="Instagram"></img></a></li>
              <li><a href="https://twitter.com/Heedsfoundation?s=08" className='twitter'><img src={twitter} alt="Twitter"></img></a></li>
              </ul>

            </div>
          </div>
          <div className="partition-right">
            <div className="contact-form" id="contact">
              <form onSubmit={this.handleSubmit}>
                <h3>GET IN TOUCH</h3>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail ID"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  required
                />
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                />
                <button type="submit">Send</button>
              </form>
              {isSubmitted && <p>Message has been sent. Thank you!</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
