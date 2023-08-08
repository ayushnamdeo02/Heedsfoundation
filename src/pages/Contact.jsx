import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com'; // Import the EmailJS library
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
      isSubmitted: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = this.state;

    const templateParams = {
      from_name: name,
      from_email: email,
      number:phone,
      to_name: name, // Replace with recipient's name
      message: message,
    };

    try {
      // Replace with your EmailJS service ID and template ID
      const response = await emailjs.send(
        'volunteer',
        'volunteer-temp',
        templateParams,
        'kf4Jt-CYJzwGDc8vk'
      );

      console.log('Email sent:', response);
      this.setState({ isSubmitted: true });
    } catch (error) {
      console.error('Error sending email:', error);
    }

    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  render() {
    const { name, email, phone, message, isSubmitted } = this.state;

    return (
      <div className="container-contact">
        <Helmet>
          <meta
            name="description"
            content="Get in touch with Heeds Foundation. Contact us for any inquiries, collaborations, or assistance. We are here to help you. Connect with us through phone, email, or social media."
          />
        </Helmet>
        <div className="partition-contact">
          <div className="partition-left">
            <img src={logo} alt="logo" />
            <div className="contact-info">
              <h6>Contact No.</h6>
              <p>Mr. Pratik Meshram  +91 8788411441</p>
              <p>Mr. Ayush Namdeo    +91 7987210406</p>
              <p>Mr.Gaurav Borghare  +91 8208048191</p>
              <p>Mr.Shivam Sontakke  +91 8668353016</p>
              <p>Mr.Kartik Bhandari  +91 8118847746</p>
              <h6>Email ID</h6>
              <p>heedsfoundation.ngo@gmail.com</p>
              <h6>Social Media Links:</h6>
              <ul className='social-media-button-contact'>
                <li><a href="https://www.linkedin.com/company/heeds-foundation/" className='linkedin'><img src={linkedin} alt="LinkedIn" /></a></li>
                <li><a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className='instagram'><img src={instagram} alt="Instagram" /></a></li>
                <li><a href="https://twitter.com/Heedsfoundation?s=08" className='twitter'><img src={twitter} alt="Twitter" /></a></li>
              </ul>
            </div>
          </div>
          <div className="partition-right">
            <div className="contact-form" id="contact">
              {isSubmitted ? (
                <div className="thank-you-message">
                  <p>Thank you for contacting us!</p>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
