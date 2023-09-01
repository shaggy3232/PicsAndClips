import React, { Component } from 'react';
import './CreatorCarousel.css';
import slideOneImage from '../../Assets/laptopandsmartphonemockups.png'
import slideTwoImage from '../../Assets/branddesignslide2.png'
import slideThreeImage from '../../Assets/mediaproductionslide3.png'


class CreatorCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.slides.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + this.slides.length) % this.slides.length,
    }));
  };

  slides = [
    {
      image: slideOneImage,
      title: 'Software Development',
      description: 'Design and develop breathtaking websites and applications',
    },
    {
      image: slideTwoImage,
      title: 'Brand Design',
      description: 'Create a brand design that people will want to represent',
    },
    {
      image: slideThreeImage,
      title: 'Media Production',
      description: 'Creating stunning media in mulitple mediums that serves your exact needs',
    },
    // Add more slides as needed
  ];

  render() {
    const { currentSlide } = this.state;
    const currentImage = this.slides[currentSlide].image;
    const currentTitle = this.slides[currentSlide].title;
    const currentDescription = this.slides[currentSlide].description;

    return (
      <div className="creator-carousel-container container">
        <div className="creator-carousel">
          <img src={currentImage} alt={currentTitle} />
          <div className="creator-carousel-content">
            <h3>{currentTitle}</h3>
            <p>{currentDescription}</p>
          </div>
          <button className="creator-carousel-button prev-button" onClick={this.prevSlide}>
            Prev
          </button>
          <button className="creator-carousel-button next-button" onClick={this.nextSlide}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default CreatorCarousel;
