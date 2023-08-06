import React, { Component } from 'react';
import './team.css';
import headerimg from "../assets/header-work.png";
import kartik from "../assets/kartik.jpg";
import ayush from '../assets/ayush.jpg' ;  // eslint-disable-line
import gaurav from '../assets/gaurav.jpg' ;
import pratik from '../assets/pratik.jpg';
import shivam from "../assets/shivam.jpg";
import mayuri from "../assets/mayuri.jpg";
import anish from "../assets/anish.jpg";
import dhiraj from "../assets/dhiraj.jpg";
import sudarshan from "../assets/sudarshan.jpg";
import bahvesh from "../assets/bhavesh.jpg";
class Team extends Component {
  render() {

    const teamMembers = [
      {
        name: 'Mr.Pratik Meshram',
        title: 'Founder',
        imageURL: pratik,
        socialLinks: {
          facebook: '/',
          twitter: 'https://twitter.com/pratiks_m',
          Instagram: 'https://www.instagram.com/pratiksm._/',
          linkedin: 'https://linkedin.com/in/meshramp/'
        }
      },
      {
        name: 'Mr.Ayush Namdeo',
        title: 'Co-Founder',
        imageURL: ayush,
        socialLinks: {
          facebook: '/',
          twitter: 'https://twitter.com/Ayush_namdeo07',
          Instagram: 'https://www.instagram.com/ayushnamdeo_02/',
          linkedin: 'https://linkedin.com/in/ayush-kumar-namdeo/'
        }
      },
      {
        name: 'Mr.Gaurav Borghare',
        title: 'Co-Founder',
        imageURL: gaurav,
        socialLinks: {
          facebook: 'https://www.facebook.com/gaurav.borghare.75?mibextid=ZbWKwL',
          twitter: 'https://twitter.com/GauravBorghare',
          Instagram: 'https://instagram.com/',
          linkedin: 'https://www.linkedin.com/in/gaurav-p-borghare-4b83a8202'
        }
      },
      {
        name: 'Mr.Kartik Bhandari',
        title: 'Secratery',
        imageURL: kartik,
        socialLinks: {
          facebook: '/',
          twitter: 'https://twitter.com/kartikb320',
          Instagram: 'https://www.instagram.com/kartikb320/',
          linkedin: 'https://linkedin.com/in/kartik-bhandari-1751b620b/'
        }
      },
      {
        name: 'Mr.Shivam Sontakke',
        title: 'Treasurer',
        imageURL: shivam,
        socialLinks: {
          facebook: '/',
          twitter: 'https://twitter.com/vairagi5683',
          instagram: 'https://www.instagram.com/sontakke.shivam/',
          linkedin: 'https://www.linkedin.com/in/vairagi5683'
        }
      },
      // Add more team members here if needed
    ];
    const cardData = [
      {
        imageUrl: anish,
        name:"Mr. Anish S. Jha",
        position:"Event Head",
        socialLinks: {
          facebook: '/',
          twitter: '/',
          Instagram: 'https://www.instagram.com//',
          linkedin: '/'
        }
      },
      {
        imageUrl: bahvesh,
        name:"Mr.Bhavesh Vaidya",
        position:"Executive Head",
        socialLinks: {
          facebook: '/',
          twitter: '/',
          Instagram: '/',
          linkedin: '/'
        }
      },
      {
        imageUrl: mayuri,
        name:"Ms.Mayuri Kamdi",
        position:"Marketing Head",
        socialLinks: {
          facebook: '/',
          twitter: '/',
          Instagram: '/',
          linkedin: '/'
        }
      },
      {
        imageUrl: sudarshan,
        name:"Mr.Sudarshan Tiwari",
        position:"Design Head",
        socialLinks: {
          facebook: '/',
          twitter: '/',
          Instagram: '/',
          linkedin: '/'
        }
      },
      {
        imageUrl: dhiraj,
        name:"Mr.Dhiraj Patil",
        position:"PR Head",
        socialLinks: {
          facebook: '/',
          twitter: '/',
          Instagram: '/',
          linkedin: '/'
        }
      },
      // Add more card data objects
    ];
    return (
      <div className='team-page-main'>
        <div className='header-img'><img src={headerimg} alt='header'></img></div>
        <h1 className="team-heading">Our Team</h1>
        <div className='team-data'>
        <p>Meet the our team Behind Heeds Foundation! Our dedicated team, working relentlessly to create a better world through education, healthcare, and sustainable development. Together, we're empowering communities, one day at a time.</p>
        </div>
        <div className='our-team-body'>
      {teamMembers.map((member, index) => (
        <div key={index} className="our-team">
          <div className="picture">
            <img className="img-fluid" src={member.imageURL} alt="Team Member" />
          </div>
          <div className="team-content">
            <h3 className="name">{member.name}</h3>
            <h4 className="title">{member.title}</h4>
          </div>
          <ul className="social">
            <li><a href={member.socialLinks.facebook} className="fa fa-facebook" aria-hidden="true" alt="facebook"></a></li>
            <li><a href={member.socialLinks.twitter} className="fa fa-twitter" aria-hidden="true" alt="twitter"></a></li>
            <li><a href={member.socialLinks.Instagram} className="fa fa-instagram" aria-hidden="true" alt="instagram"></a></li>
            <li><a href={member.socialLinks.linkedin} className="fa fa-linkedin" alt="linkedin"></a></li>
          </ul>
        </div>
      ))}
    </div>
        <div className='block'>
            {cardData.map((data, index) => (
              <div key={index} className="card">
                <div className='image-card'>
                <img className="image" src={data.imageUrl} alt="sds" ></img></div>
                <div className="title">{data.name}</div>
                <div className="position">{data.position}</div>

                <div className="card-content">
                  
                  <ul className="social-links">
                  <li><a href={data.socialLinks.facebook} className="fa fa-facebook" aria-hidden="true" alt="facebook"></a></li>
            <li><a href={data.socialLinks.twitter} className="fa fa-twitter" aria-hidden="true" alt="twitter"></a></li>
            <li><a href={data.socialLinks.Instagram} className="fa fa-instagram" aria-hidden="true" alt="instagram"></a></li>
            <li><a href={data.socialLinks.linkedin} className="fa fa-linkedin" alt="linkedin"></a></li>
          </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }
}

export default Team;



