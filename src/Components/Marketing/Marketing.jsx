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
                                
                                <div class="title">Step 2</div>
                                <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                            </li>
                            <li >
                                
                                <div class="title">Step 3</div>
                                <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                            </li>
                            <li >
                            
                                <div class="title">Step 4</div>
                                <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                            </li>
                        </ol>
            </div>

        )
    }
}
export default Marketing