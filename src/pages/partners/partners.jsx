import React, { Component } from 'react';
import "./partners.css";
import vairagi from '../assets/vairagi.jpg';
import dawa from '../assets/dawa.jpg';
import headerimg from "../assets/header-work.png";

class Partners extends Component {
  
  render() {
    
    const partners = [
      {
        name: 'Vairagi Learning',
        imageUrl:vairagi,
      },
      {
        name: 'Janheet Generics',
        imageUrl:dawa,
      },
      // Add more partners here
    ];
    return (
        <div className='partner-page-main'>
        <div className='header-img'><img src={headerimg} alt='header'></img></div>
        <h1 className="partners-heading">Our Partners</h1>
        <div className='partners-data'>
          <p>At Heeds Foundation, we're honored to collaborate with an array of dedicated partners who share our vision and commitment to creating positive change. 
Our partners, from various sectors and fields, contribute immensely to our work, lending their expertise, resources, and support. Together, we're driving progress in education, healthcare, sustainable development, and humanitarian response.</p>
        </div>
      <div className='home-partners'>
      {partners.map((partner, index) => (
            <div key={index} className="card">
              <div className='image-card'>
                <img className="image" src={partner.imageUrl} alt="sds" ></img>
              </div>
              <div className="title">{partner.name}</div>
            </div>
          ))}
      </div>
    </div>
    );
  }
};

export default Partners;
