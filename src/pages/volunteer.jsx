import React, { Component } from 'react';
import axios from 'axios';
import './Volunteer/Volunteer.css';
import volunteer_head from './assets/head.png';
import { Helmet } from 'react-helmet';

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      emailid: '',
      role: 'volunteer',
      gender: '',
      dateOfBirth: '',
      contactNo: '',
      address: '',
      agreed: '',
      emailValid: true,
      mobileNumberValid: true,
      dateOfBirthValid: true,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      agreed,
      fullName,
      role,
      gender,
      dateOfBirth,
      contactNo,
      address,
      emailid,
      emailValid,
      mobileNumberValid,
      dateOfBirthValid,
    } = this.state;

    if (agreed !== 'Yes') {
      alert('Please agree to the declaration before submitting.');
      return;
    }

    if (!emailValid || !mobileNumberValid || !dateOfBirthValid) {
      alert('Please enter valid details.');
      return;
    }

    const formData = {
      joinheedsfoundation: role,
      emailid: emailid,
      fullname: fullName,
      gender: gender,
      dob: dateOfBirth,
      contact: contactNo,
      address: address,
      submit: 'Yes',
    };
    try {
    const response1 = await axios.post('https://formsubmit.co/20945a60b240b0851fe221d0c34f887f', formData);

    if (response1.status === 200) {
      console.log('Email sent successfully!');
    } else {
      console.error('Email sending failed.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/9hpyl1zaqyaku',
        formData
      );

      if (response.status === 201) {
        alert('Registration submitted successfully!');
        this.setState({
          fullName: '',
          role: 'volunteer',
          emailid: '',
          gender: '',
          dateOfBirth: '',
          contactNo: '',
          address: '',
          agreed: 'Yes',
          emailValid: true,
          mobileNumberValid: true,
          dateOfBirthValid: true,
        });
      } else {
        alert('Registration submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration submission failed. Please try again.');
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === 'emailid') {
        this.validateEmail(value);
      } else if (name === 'contactNo') {
        this.validateMobileNumber(value);
      } else if (name === 'dateOfBirth') {
        this.validateDateOfBirth(value);
      }
    });
  };

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    this.setState({ emailValid: isValid });
  };

  validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    const isValid = mobileNumberRegex.test(mobileNumber);
    this.setState({ mobileNumberValid: isValid });
  };

  validateDateOfBirth = (dateOfBirth) => {
    const today = new Date();
    const selectedDate = new Date(dateOfBirth);
    const isValid = selectedDate <= today;
    this.setState({ dateOfBirthValid: isValid });
  };

  render() {
    const {
      fullName,
      role,
      emailid,
      gender,
      dateOfBirth,
      contactNo,
      address,
      agreed,
      emailValid,
      mobileNumberValid,
      dateOfBirthValid,
    } = this.state;

    return (
      <div className="volunteer-container">
         <Helmet>
          <title>Join Heeds Foundation Family</title>
          <meta name="description" content="Become a volunteer and join the Heeds Foundation family. Collaborate, promote equality, and make a difference in the community. Sign up now!" />
        </Helmet>
        <img src={volunteer_head} alt="head" />
        <div className="title-volunteer">Join Heeds Foundation Family</div>
        <form className="volunteer-form" onSubmit={this.handleSubmit}>
          <div className="info-volunteer">
            <div className="info-title">Core Principles of Heeds Foundation</div>
            <ul>
              <li>
                <b>Collaboration:</b> We actively seek to collaborate with like-minded organizations, volunteers, and
                community members to maximize our collective efforts.
              </li>
              <li>
                <b>Equality:</b> We believe in equality and inclusivity for all individuals, irrespective of their
                background, gender, or socioeconomic status.
              </li>
              <li>
                <b>Volunteering:</b> We recognize the value and impact of volunteers in furthering our mission. We
                promote a culture of volunteerism.
              </li>
            </ul>
          </div>
          <div className="body-form">
            <label className="role">Join as:</label>
            <select id="role" name="role" value={role} onChange={this.handleInputChange}>
              <option value="volunteer">Volunteer</option>
              <option value="donor">Donor</option>
            </select>

            <label className="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={this.handleInputChange}
              required
            />

            <label className="emailid">Email id:</label>
            <input
              type="text"
              id="emailid"
              name="emailid"
              value={emailid}
              onChange={this.handleInputChange}
              required
            />
            {!emailValid && <div className="error">Please enter a valid email.</div>}

            <label className="gender">Gender:</label>
            <select id="gender" name="gender" value={gender} onChange={this.handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={this.handleInputChange}
              required
            />
            {!dateOfBirthValid && <div className="error">Please enter a valid date of birth.</div>}

            <label className="contactNo">Contact No:</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={this.handleInputChange}
              required
            />
            {!mobileNumberValid && <div className="error">Please enter a valid 10-digit mobile number.</div>}

            <label className="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              required
            ></textarea>

            <div className="declaration">
              <label className="agreed">
                I agree to follow the Heeds Foundation core principles and I understand that any personal risk during the
                process will be borne by me and the Heeds Foundation is not liable.
              </label>
              <select
                id="agreed"
                name="agreed"
                value={agreed}
                onChange={this.handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Volunteer;
