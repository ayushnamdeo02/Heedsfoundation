import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./work/work.css";
import { projects } from "./work/constant";
import header from './assets/header-work.png';

class Work extends Component {
  render() {
    return (
      <div className="work-container" id="work">
        <Helmet>
          <title>Our Works</title>
          <meta name="description" content="Explore our portfolio of projects and initiatives. Learn how we are making a difference in education, healthcare, sustainable development, and more." />
        </Helmet>

        <img src={header} alt="Header" />

        <div className="title">Our Works</div>
        <div className="work-content">
          <p className="work-content-heading">Heeds Foundation Work</p>
          <div className="box-work">
            <ul>
              <li><b>Education Support:</b> Empowering communities through education by providing resources, scholarships, and equal opportunities for learning.</li>
              <li><b>Healthcare Initiatives:</b> Improving access to quality healthcare services in underserved areas, promoting well-being and addressing health disparities.</li>
              <li><b>Sustainable Development Projects:</b> Driving sustainable solutions for environmental conservation and community development.</li>
              <li><b>Humanitarian Assistance:</b> Providing immediate relief and support during times of crisis and helping communities recover and rebuild.</li>
              <li><b>Awareness:</b> Raising awareness about education, healthcare, gender equality, and environmental sustainability.</li>
              <li><b>Collaboration and Partnerships:</b> Collaborating with organizations, government agencies, and community leaders to maximize impact and create sustainable change.</li>
              <li><b>Volunteer Engagement:</b> Engaging volunteers to contribute their time, skills, and passion in making a meaningful difference in our programs and projects.</li>
            </ul>
          </div>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
