import React, { Component } from 'react';
import './HeroBanner.css';

class HeroBanner extends Component {
  render() {
    const { onContactButtonClick } = this.props;

    return (
    <div className="neumorphic-hero-banner">
        <div className="content">
          <h1 className="title">All of your Online Business Needs</h1>
          <p className="subtitle">You Should Get Plugged In</p>
          <p>We help businesses scale with Technology and Creativity</p>
          <button className='scroll-button' onClick={onContactButtonClick}>Contact Us</button>
        </div>
      
    </div>
    );
  }
}

export default HeroBanner;
