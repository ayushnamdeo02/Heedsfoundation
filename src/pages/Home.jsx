import React, { Component } from 'react';
import "./home/home.css";
import image1 from '../images/slider-1.jpg';
import image2 from "../images/slider-2.jpg";
import image3 from "../images/slider-3.jpg";
import image4 from "../images/slider-4.jpg";
import image5 from "../images/slider-5.jpg";
import image6 from "../images/slider-6.jpg";
import image7 from "../images/slider-7.jpg";



class Home extends Component {
  state = {
    images: [image1, image2, image3, image4, image5, image6,image7],
    currentSlide: 0
  };

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.intervalId = setInterval(this.nextSlide, 5000); // Change image every 3 seconds
  };

  stopSlider = () => {
    clearInterval(this.intervalId);
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % prevState.images.length
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide - 1 + prevState.images.length) % prevState.images.length
    }));
  };

  render() {
    const { images, currentSlide } = this.state;

    return (
      <div className='container-home'>
        <div className='slider'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        <button className="prev-button" onClick={this.prevSlide}>Previous</button>
        <button className="next-button" onClick={this.nextSlide}>Next</button>

        <div className='home-about-section'>
          <h2 className="home-about-section-title">About Us</h2>
          <p className="home-about-section-description">Heeds Foundation, founded by students from Nagpur City, is a non-profit organization dedicated to empowering communities through education and addressing social issues and instabilities. with a mission to promote communities through education, healthcare, sustainable development, and humanitarian response, Heeds Foundation aims to promote support, resources, and assistance to those in need. The organization was established by a group of passionate students who identified various social challenges and decided to take action by forming a Heeds Foundation. Through their collective efforts, Heeds Foundation strives to create positive change, promote equality, and make a meaningful impact in the lives of individuals and communities.

          <br></br>
          Our primary focus is on promoting quality education to underserved children, ensuring that every child has access to learning opportunities. We believe that education is the key to unlocking a brighter future and creating lasting change. Through our initiatives, we aim to bridge the educational gap, promote resources and scholarships, and promote equal access to education for all. With a strong commitment to promoting equality and fostering positive change, Heeds Foundation strives to empower individuals and communities through the transformative power of education.</p>
        </div>
      </div>
    );
  }
}

export default Home;
