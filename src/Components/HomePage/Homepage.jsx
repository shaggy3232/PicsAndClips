import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./homepage.css"
import BrandDesignMenu from '../BrandDesignPackages/BrandDesignPackage';



class Homepage extends Component {
    render(){
        return(
            <div className = "bg" >           
                <BrandDesignMenu/>
            </div>

        )
    }
}
export default Homepage