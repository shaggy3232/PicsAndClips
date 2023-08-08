import React, { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./homepage.css"
import BrandDesignMenu from '../BrandDesignPackages/BrandDesignPackage';
import DigitalPresenceAudit from '../DigitalPresenseAudit/DigitalPresenceAudit';
import Operation from '../Operation/Operation';
import Marketing from '../Marketing/Marketing';
import ShopifySolution from '../ShopifySoloutions/ShopifySoloution';
import MediaCreation from '../MediaCreation/MediaCreation';
import HeroBanner from '../HeroBanner/HeroBanner';
import CreatorCarousel from '../CreatorCarousel/CreatorCarousel';
import GoHighlevelContactForm from '../GoHighlevelContactForm/GoHighlevelContactForm';



class Homepage extends Component {

    constructor(props) {
        super(props);
        this.contactFormRef = React.createRef();
      }
    
      handleScrollToContactForm = () => {
        if (this.contactFormRef.current) {
          this.contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    render(){
        return(
            <div className = "bg" >
                <HeroBanner onContactButtonClick={this.handleScrollToContactForm}/>
                <Operation/>
                <CreatorCarousel/>
                
                <Marketing/>
                <ShopifySolution/>
                <DigitalPresenceAudit/>
                <GoHighlevelContactForm ref={this.contactFormRef}/>
            </div>

        )
    }
}
export default Homepage