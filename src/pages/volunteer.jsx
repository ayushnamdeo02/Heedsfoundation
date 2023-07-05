import React, { Component } from 'react';
import axios from 'axios';
import './Volunteer/Volunteer.css';
import volunteer_head from './assets/head.png';


class Volunteer extends Component {
  state = {
    emailid: '',
    fullName: '',
    role: 'volunteer',
    gender: '',
    dateOfBirth: '',
    contactNo: '',
    address: '',
    agreed: 'Yes'
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { agreed, ...formData } = this.state;

    if (agreed !== 'Yes') {
      alert('Please agree to the declaration before submitting.');
      return;
    }

    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/9hpyl1zaqyaku',
        formData
      );

      if (response.status === 201) {
        alert('Registration submitted successfully!');
        this.setState({
          emailid: '',
          fullName: '',
          role: 'volunteer',
          gender: '',
          dateOfBirth: '',
          contactNo: '',
          address: '',
          agreed: 'Yes'
        });
      } else {
        alert('Registration submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration submission failed. Please try again.');
    }
  };

  render() {
    const {
      emailid,
      fullName,
      role,
      gender,
      dateOfBirth,
      contactNo,
      address,
      agreed
    } = this.state;

    return (
      <div className="volunteer-container">
        <div className='head'>
        <img src={volunteer_head} alt='head'></img>
        </div>
        <div className="title-volunteer">Join Heeds Foundation Family</div>
        <form className="volunteer-form" onSubmit={this.handleSubmit}>
          <div className="info-volunteer">
            <p className='info-title'>Core Principles of Heeds Foundation</p>
            <ul>
              <li><b>Collaboration:</b> We actively seek to collaborate with like-minded organizations, volunteers, and community members to maximize our collective efforts.</li>
              <li><b>Equality:</b> We believe in equality and inclusivity for all individuals, irrespective of their background, gender, or socioeconomic status.</li>
              <li><b>Volunteering:</b> We recognize the value and impact of volunteers in furthering our mission. We promote a culture of volunteerism.</li>
            </ul>
          </div>
          <label className="role">Join as:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => this.setState({ role: e.target.value })}
          >
            <option value="volunteer">Volunteer</option>
            <option value="donor">Donor</option>
          </select>
          <label className="emailid">Email ID:</label>
          <input
            type="text"
            id="emailid"
            value={emailid}
            onChange={(e) => this.setState({ emailid: e.target.value })}
            required
          />
          <label className="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
            required
          />

          <label className="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label className="dateOfBirth">Date of Birth:</label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
            required
          />

          <label className="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            value={contactNo}
            onChange={(e) => this.setState({ contactNo: e.target.value })}
            required
          />

          <label className="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => this.setState({ address: e.target.value })}
            required
          ></textarea>

          <div className="declaration">
            <label className="agreed">
              I agree to follow the Heeds Foundation core principles and I understand
              that any personal risk during the process will be borne by me and the
              Heeds Foundation is not liable.
            </label>
            <select
              id="agreed"
              value={agreed}
              onChange={(e) => this.setState({ agreed: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Volunteer;
