import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./homepage.css"
import BrandDesignMenu from '../BrandDesignPackages/BrandDesignPackage';
import DigitalPresenceAudit from '../DigitalPresenseAudit/DigitalPresenceAudit';
import Operation from '../Operation/Operation';
import Marketing from '../Marketing/Marketing';
import ShopifySolution from '../ShopifySoloutions/ShopifySoloution';
import MediaCreation from '../MediaCreation/MediaCreation';
import HeroBanner from '../HeroBanner/HeroBanner';



class Homepage extends Component {
    render(){
        return(
            <div className = "bg" >
                <HeroBanner/>           
                <BrandDesignMenu/>
                <DigitalPresenceAudit/>
                <Operation/>
                <Marketing/>
                <ShopifySolution/>
                <MediaCreation/>
            </div>

        )
    }
}
export default Homepage