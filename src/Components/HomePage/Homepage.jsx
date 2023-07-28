import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./homepage.css"
import BrandDesignMenu from '../BrandDesignPackages/BrandDesignPackage';
import DigitalPresenceAudit from '../DigitalPresenseAudit/DigitalPresenceAudit';
import Operation from '../Operation/Operation';
import Marketing from '../walkthrough/walkthrough';
import ShopifySolution from '../ShopifySoloutions/ShopifySoloution';
import MediaCreation from '../MediaCreation/MediaCreation';
import HeroBanner from '../HeroBanner/HeroBanner';
import CreatorCarousel from '../CreatorCarousel/CreatorCarousel';
import GoHighlevelContactForm from '../GoHighlevelContactForm/GoHighlevelContactForm';



class Homepage extends Component {
    render(){
        return(
            <div className = "bg" >
                <HeroBanner/>           
                <DigitalPresenceAudit/>
                <Operation/>
                <CreatorCarousel/>
                <BrandDesignMenu/>
                <Marketing/>
                <ShopifySolution/>
                <GoHighlevelContactForm/>
            </div>

        )
    }
}
export default Homepage