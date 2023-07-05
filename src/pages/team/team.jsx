import React, { Component } from 'react';
import './team.css';

class Team extends Component {
  render() {
    const Members = [
      {
        name: 'Mr. Pratik Meshram',
        position: 'Founder',
        position2: 'Founder',
        image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      },
      {
        name: 'Mr. Gaurav Borghare',
        position: 'Co-Founder',
        position2: 'Founder',
        image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      },
      {
        name: 'Mr. Ayush Namdeo',
        position: 'Co-Founder Management head',
        position2: 'Founder',
        image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      },
      {
        name: 'Mr. Pratik Meshram',
        position: 'Founder',
        position2: 'Founder',
        image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      },
      {
        name: 'Mr. Pratik Meshram',
        position: 'Founder',
        position2: 'Founder',
        image: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png',
      },
      // Add more team members
    ];

    return (
      <div>
        <h1 className="team-heading">Our Team</h1>
        <div className="team-container">
          {Members.map((member, index) => (
            <div key={index} className="team-card">
              <div className="img-wrapper">
                <img className="team-img" src={member.image} alt={member.name} />
              </div>
              <p className="text-blk-name">{member.name}</p>
              <p className="text-blk-position">{member.position}</p>
              <p className="text-blk-position">{member.position2}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
