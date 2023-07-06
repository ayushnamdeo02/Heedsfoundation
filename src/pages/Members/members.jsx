import React, { Component } from 'react';
import './members.css';
import membersData from './data';
class Members extends Component {
  render() {
    return (
      <div className="members-container">
        <h1>Members</h1>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Ranking</th>
              <th>Volunteers Name</th>
              <th>City</th>
              <th>Date Of Joining</th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((member, index) => (
              <tr key={index}>
                <td>{member.sNo}</td>
                <td>{member.ranking}</td>
                <td>{member.name}</td>
                <td>{member.city}</td>
                <td>{member.dateOfJoining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Members;
