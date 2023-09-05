import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import contentTeam from "../../Assets/undraw_projections_re_ulc6.svg"
import SytemsSVG from "../../Assets/undraw_online_test_re_kyfx.svg"
import automationsvg from "../../Assets/undraw_proud_coder_re_exuy.svg"
import consultingsvg from "../../Assets/undraw_content_team_re_6rlg.svg"
import "./Operation.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


class Operation extends Component {
    render(){
        return(
            <div className='container'>
                <div class="row">
                    <div class= " operation-icons-container col-lg-4 col-12">
                        <img 
                        src={contentTeam} 
                        className='operation-icons'
                        alt="Your SVG"
                        data-aos="fade-right" />
                    </div>
                    <div class="col-lg-8 col-12" >     
                        <div>
                        <h2 className='operation-title'>Optimize you Business Operation</h2>
                            <div class="">
                            <h3 className='service-title'>Systems set up</h3>
                            <p className='service-description'>We'll analyze your workflow and design personalized systems that align perfectly with your business processes. Say goodbye to one-size-fits-all solutions.</p>                         
                            </div>
                        
                        

                        
                    
                            <div class="">
                            <h3 className='service-title'>Analytics and reporting</h3>
                            <p className='service-description'>Help businesses track key performance metrics using analytics tools such as Google Analytics, providing regular reporting on site traffic, conversion rates, and other important data points.</p>
                            </div>
                    

                    
                            <div class="">
                            
                            <h3 className='service-title'>Automation Management</h3>
                            <p className='service-description'>We'll identify opportunities for automation across your business and create custom workflows that meet your specific requirements.</p>
                        
                            </div>
                

                        
                            <div class="">
                            
                            <h3 className='service-title'>Business Software Consultation</h3>
                            <p className='service-description'>The primary goal of this service is to assist businesses in identifying and selecting the most suitable software tools that align with their specific needs and objectives. </p>
                            
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div> 

        )
    }
}
export default Operation