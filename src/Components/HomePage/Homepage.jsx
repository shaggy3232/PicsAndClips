import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./homepage.css"
import AssetArsenal from "../AssetArsenal/AssetArsenal";
import Spotlight from "../Spotlight/Spotlight"
import NFTLookOut from "../NFTLookOut/NFTLookOut";
import YoutubeShowcase from "../YoutubeShowcase/YoutubeShowcase";
import Heatlist from "../HeatList/Heatlist";
import NavBar from '../NavBar/NavBar';
import BrandDesignMenu from '../BrandDesignPackages/BrandDesignPackage';

class Homepage extends Component {
    render(){
        return(
            <div className = "bg">
                <Container fluid ={true}>
                <NavBar/>
                <Row>
                    <Col >  <Spotlight name = "My Shit"/>
                            <BrandDesignMenu/>
                    </Col>
                    <Col lg={3} md = {6} sm = {12} xs="12"><AssetArsenal/></Col>
                </Row>
                </Container>
            </div>

        )
    }
}
export default Homepage