import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import contentTeam from "../../Assets/undraw_projections_re_ulc6.svg"
import SytemsSVG from "../../Assets/undraw_online_test_re_kyfx.svg"
import automationsvg from "../../Assets/undraw_proud_coder_re_exuy.svg"
import consultingsvg from "../../Assets/undraw_content_team_re_6rlg.svg"
import "./Operation.css"


class Operation extends Component {
    render(){
        return(

            <div class="operation-cards container">
                <h2>Operation Optimization</h2>
                <div class="container">
                    <div class="card">
                    <div class="box">
                        <div class="content">
                        <h3>Systems set up</h3>
                        <p>We'll analyze your workflow and design personalized systems that align perfectly with your business processes. Say goodbye to one-size-fits-all solutions.</p>
                        {/* <a href="#">Learn More</a> */}
                        <img src={SytemsSVG} style={{ height: 153, width: 136 }} alt="Your SVG" />
                        
                        </div>
                    </div>
                    </div>

                    <div class="card">
                    <div class="box">
                        <div class="content">
                        
                        <h3>Analytics and reporting</h3>
                        <p>Help businesses track key performance metrics using analytics tools such as Google Analytics, providing regular reporting on site traffic, conversion rates, and other important data points.</p>
                        <img src={contentTeam} style={{ height: 153, width: 136 }} alt="Your SVG" />
                        </div>
                    </div>
                    </div>

                <div class="card">
                <div class="box">
                    <div class="content">
                    
                    <h3>Automation Management</h3>
                    <p>We'll identify opportunities for automation across your business and create custom workflows that meet your specific requirements.</p>
                    <img src={automationsvg} style={{ height: 153, width: 136 }} alt="Your SVG" />
                    </div>
                </div>
                </div>

                <div class="card">
                <div class="box">
                    <div class="content">
                    
                    <h3>Business Software Consultation</h3>
                    <p>The primary goal of this service is to assist businesses in identifying and selecting the most suitable software tools that align with their specific needs and objectives. </p>
                    <img src={consultingsvg} style={{ height: 153, width: 136 }} alt="Your SVG" />
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
export default Operation