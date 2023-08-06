import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./squad/squad.css";
import squad_head from "./squad/head-squad.png";
import partnerimg from "./assets/ourpartners.png";
import teamimg from "./assets/ourteams.png";

class Squads extends Component {
  render() {
    return (
      <div className="squad-page" id='squads'>
        <Helmet>
          <title>Squads - Heeds Foundation</title>
          <meta name="description" content="Explore the passionate teams and dedicated volunteers of Heeds Foundation. Our squads are committed to making a positive impact through education, healthcare, sustainable development, and humanitarian response. Join us in our mission to empower communities and create a better future." />
        </Helmet>
        <img src={squad_head} alt='head'></img>
        <h2 className="page-title">Squads</h2>
        <div className="squad-container">
          <p>Welcome to Heeds Foundation, a dynamic organization driven by a passionate team, dedicated volunteers, and impactful partnerships. Our mission is to empower communities through education, healthcare, sustainable development, and humanitarian response. With a strong focus on creating positive change, we work hand in hand with volunteers who bring their skills, compassion, and energy to our initiatives.</p>
          <Link to="/about"><h6><b>To Know More</b></h6></Link>
        </div>
        <div className="circle-buttons">
        <Link className="circle-button-1" to="/team"><div>
          <img src={teamimg} alt='team'></img>
          <h4 className='heading-btn-1'>Our Teams</h4>
          </div>
          </Link>
          <Link className="circle-button-2" to="/"><div>
          <img src={partnerimg} alt='partner'></img>
          <h4 className='heading-btn-2'>Our Partners</h4>
          </div></Link>
        </div>

      </div>
    );
  }
}

export default Squads;
