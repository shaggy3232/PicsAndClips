import React, { Component } from 'react';
import './HeroBanner.css';
import iphone from "../../Assets/iphone3dmodel.png"
import iMac from "../../Assets/imac3dmodel.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import imessage from "../../Assets/chat3dmodel.png"
import card from "../../Assets/creditcard3d.png"
import pie from "../../Assets/data3d.png"
import vscode from "../../Assets/code3d.png"
class HeroBanner extends Component {

  componentDidMount() {
    AOS.init();
}

  render() {
    const { onContactButtonClick } = this.props;
    
    return (
    <div className="hero-container container">
        <img src={imessage} className="chat3d"/>
        <img src={card} className="card3d"/>
        <img src={pie} className="pie3d"/>
        <img src={vscode} className="code3d"/>
      <div className='row'>
        <div className="content col-lg-8 col-12">
          <h1 className="title">Making Sure Your Business Is Ready For The Internet</h1>
          {/* <p className="subtitle">Digital Marketing, Creative Desinging and Software Development</p> */}
          <p className='message'>You should get PLUGGED IN</p>
          <button className='scroll-button' onClick={onContactButtonClick}>Start Now</button>
        </div>
        <div  className="hero-icons col-lg-4 col-12">
        <img src={iphone} className="heroimageiphone"
         alt="Your SVG"
         data-aos="zoom-in-left"
         data-aos-duration="800"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center" />
        <img src={iMac} className="heroimageimac" 
         alt="Your SVG"
         data-aos="fade-up-left"   
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center" />
        </div>
      </div>
    </div>
    );
  }
}

export default HeroBanner;
