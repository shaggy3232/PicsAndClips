import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./Marketing.css"


class Marketing extends Component {
    render(){
        return(

            <div class="marketing-circles">
                    <h1>Marketing</h1>
                        <ol>
                            <li >
                                
                                <div class="title">Marketing and advertising</div>
                                <div class="descr">We could help businesses develop and execute effective marketing campaigns, including email marketing, social media advertising, and paid advertising on multiple mediums.</div>
                            </li>
                            <li >
                                
                                <div class="title">Build reputation</div>
                                <div class="descr">By implementing many different customer service tools for you to be more accessible to your customer and set the foundation of a trustworthy business </div>
                            </li>
                            <li >
                                
                                <div class="title">Lead Generation</div>
                                <div class="descr">We optimize every aspect of your lead generation process, from landing pages to follow-up strategies, ensuring your investment reaps remarkable returns.</div>
                            </li>
                        </ol>
            </div>

        )
    }
}
export default Marketing