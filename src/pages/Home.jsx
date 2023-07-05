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
      </div>
    );
  }
}

export default Home;
