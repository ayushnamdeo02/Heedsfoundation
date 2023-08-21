// src/components/LearningOpportunities.js
import React from 'react';

const LearningOpportunities = () => {
  return (
<div className="learning-opportunities">
      <div className="d-flex">
        <div className="card mb-4 mx-4 my-4">
          <div className="card-body">
            <h5 className="card-title">Volunteering</h5>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=932&q=80"
                 className="card-img-top"
                 alt=""
                 width="300"
                 height="200"
            />
            <p className="card-text">Join us at Heeds Foundation and make a difference through volunteering! Our volunteering opportunities offer you a chance to contribute to impactful projects, collaborate with like-minded individuals, and create positive change within our community. </p>
            <a href="https://docs.google.com/spreadsheets/d/10wxWTmMmNuxqU7YENwhuHpmVxao9HDQ7BcOrbn8OaAU/edit?usp=sharing " className="btn btn-primary">Apply Details</a>
          </div>
        </div>

        <div className="card mb-4 mx-4 my-4">
        <h5 className="card-title">Internships</h5>
          <img src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
               className="card-img-top"
               alt=""
               width="300"
               height="200"
          />
          <div className="card-body">
           
            <p className="card-text">Embark on a journey of growth and learning with Heeds Foundation's internship programs. Our internships provide you with hands-on experience, mentorship from industry experts, and the opportunity to develop valuable skills.

.</p>
            <a href="https://docs.google.com/spreadsheets/d/10wxWTmMmNuxqU7YENwhuHpmVxao9HDQ7BcOrbn8OaAU/edit?usp=sharing " className="btn btn-primary">Apply Details</a>
          </div>
        </div>

        <div className="card mb-4 mx-4 my-4">
        <h5 className="card-title">Learnings</h5>
          <img src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
               className="card-img-top"
               alt=""
               width="300"
               height="200"
          />
          <div className="card-body">
            
            <p className="card-text">Unlock a world of knowledge and growth through Heeds Foundation's diverse learning opportunities. Our learning programs provide a platform for continuous education and personal development. Whether you're seeking to expand your skill set.</p>
            <a href="https://docs.google.com/spreadsheets/d/10wxWTmMmNuxqU7YENwhuHpmVxao9HDQ7BcOrbn8OaAU/edit?usp=sharing " className="btn btn-primary">Apply Details</a>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default LearningOpportunities;
