import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./home/home.css";
import image1 from '../images/slider-1.jpg';
import image2 from '../images/slider-2.jpg';
import image8 from '../images/slider-1.jpg';
import image9 from "../images/slider-2.jpg";
import image3 from "../images/slider-3.jpg";
import image4 from "../images/slider-4.jpg";
import image5 from "../images/slider-5.jpg";
import image6 from "../images/slider-6.jpg";
import image7 from "../images/slider-7.jpg";
import  healthcare from '../images/healthcare.png';
import education from '../images/education.png';
import empower from '../images/empower.png';
import development from '../images/development.png';
import support from '../images/support.png';

class Home extends Component {
  state = {
    images: [image1, image2, image3, image4, image5, image6, image7,image8,image9],
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

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Heeds Foundation',
      description: 'A non-profit organization empowering communities through education',
      logo: 'https://heedsfoundation.com/',
      url: 'https://heedsfoundation.com/',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 8788411441',
        email: 'heedsfoundation.ngo@gmail.com',
        contactType: 'customer support',
      },
    };

    return (
      <div className='container-home'>
        <Helmet>
          <title>Heeds Foundation - Empowering Communities through Education</title>
          <meta name="description" content="Heeds Foundation is a non-profit organization dedicated to empowering communities through education and addressing social issues. Learn more about our mission and initiatives." />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>

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

        <div className='home-data'>
          <div className='data-about-home'>
            <h3 className='home-title'>About Heeds Foundation</h3>
            <div className='about-component'>
              <div className='comp'>
                <img src={healthcare} alt='h=healthcare'></img>
                <div className='comp-title'>Healthcare</div>
                <p>we believe that quality healthcare is a fundamental right for all individuals. We are dedicated to promoting accessible and equitable healthcare services, working towards addressing health disparities, and improving overall well-being. Through our initiatives.</p>
              </div>
              <div className='comp'>
                <img src={education} alt='e=education'></img>
                <div className='comp-title'>Education</div>
                <p>We believe that education is the key to unlock a brighter future and bring about lasting change, hence we are promoting quality education for underprivileged children, ensuring that every child has access to learning opportunities.</p>
              </div>
              <div className='comp'>
                <img src={empower} alt='e=empower'></img>
                <div className='comp-title'>Empowerment</div>
                <p>We believe that potential of every individual is create positive impact make difference. Through our initiatives, we promote empowerment by providing support, resources, and opportunities. We believe that when individuals are empowered, they can overcome obstacles, achieve their goals, and contribute to the betterment of their communities.</p>
              </div>
              <div className='comp'>
                <img src={development} alt='d=development'></img>
                <div className='comp-title'>Development</div>
                <p>We believe in the power of sustainable development to create a better future for generations to come. We promote and advocate for sustainable development practices that protect the environment, uplift communities, and drive positive change.</p>
              </div>
              <div className='comp'>
                <img src={support} alt='s=support'></img>
                <div className='comp-title'>Support</div>
                <p>We are passionate about providing support to those in need. We believe in the power of compassion and collaboration to create positive change. Through our initiatives, we promote equality and work tirelessly to uplift individuals and communities.</p>
              </div>
            </div>
          </div>
          <div className='who-we-are'>
            <h3 className='who-title'>Who We Are</h3>
            <div className='who-grid'>
              <div className='who-data'>
                <p> We are Heeds Foundation, a non-profit organization dedicated to making a positive impact in communities.</p>
                </div>
                <div className='who-data'>
                <p>Our team is comprised of passionate individuals driven by a shared vision of creating a better future.</p>
                </div>
                <div className='who-data'>
                <p>We believe in the power of education, healthcare, sustainable development, and humanitarian response to uplift and empower communities.</p>
                </div>
                <div className='who-data'>
                <p>Our mission is to promote equality, foster positive change, and provide support and resources to those in need.</p>
                </div>
                <div className='who-data'>
                <h3>Heeds Foundation</h3>
                </div>
                <div className='who-data'>
                <p>Through our initiatives, we strive to bridge the educational gap, improve access to healthcare services, drive sustainable development, and respond effectively to humanitarian crises.</p>
                </div>
                <div className='who-data'>
                <p> We collaborate with like-minded organizations, government agencies, and community leaders to maximize our impact and create lasting change.</p>
                </div>
                <div className='who-data'>
                <p> Together, we can empower communities, transform lives, and build a brighter future for all.</p>
                </div>
                <div className='who-data'>
                <p>Join us in our journey of making a difference and be a part of Heeds Foundation's impactful work.</p>
                </div>
            </div>
          </div>
          <div className='involved'>
            <h3 className='involved-title'>How to Get Involved/Support Us</h3>
            <div className='involved-grid'>
              <div className='involved-datai'>
                <p><strong>Donate</strong></p>
                </div>
                <div className='involved-data'>
                <p>Your donation can help us to promote education to underserved children. Your donation has the power to empower communities,education ,healthcare access, and sustainable development.</p>
                </div>
                <div className='involved-datai'>
                <p><strong>Volunteer</strong></p>
                </div>
                <div className='involved-data'>
                <p>Join our team of dedicated volunteers to help us make a difference in the lives of underserved children. Visit our website to learn more.</p>
                </div>
                <div className='involved-datai'>
                <p><strong>Spread the word</strong></p>
                </div>
                <div className='involved-data'>
                <p>Help us to raise awareness about the importance of education and the work that we do. Follow us on social media and share our posts with your network.</p>
                </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
