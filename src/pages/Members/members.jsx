import React, { Component } from 'react';
import './members.css';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      membersData: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch members data from API using the provided API key
    fetch('YOUR_API_ENDPOINT', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'AIzaSyAaTwZB0ujRSZzXVBs2OTcEYlECC6VwdPM',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          membersData: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          isLoading: false,
        });
      });
  }

  render() {
    const { membersData, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="members-container">
        <h1>Members</h1>
        <table>
          <thead>
            <tr>
              <th>sNo</th>
              <th>ranking</th>
              <th>name</th>
              <th>city</th>
              <th>joiningDate</th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((member) => (
              <tr key={member.id}>
                <td>{member.sNo}</td>
                <td>{member.ranking}</td>
                <td>{member.name}</td>
                <td>{member.city}</td>
                <td>{member.joiningDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Members;
