import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./DigitalPresenceAudit.css"
import Accordion from "./Accordion";
import "./scss/main.scss";
import illustration__box from "./images/illustration-box-desktop.svg";
import illustration__woman_desktop from "./images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "./images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
    {
      question: "Website structure",
      answer:"Check the website's structure, layout, and navigation to ensure that it is user-friendly and easy to navigate. Make sure that important pages are easily accessible from the homepage and that the website's structure is logical and intuitive.",
    },
    {
      question: "Content quality audit",
      answer:
        "Review the website's content to ensure that it is high-quality, informative, and engaging. Ensure that the website's messaging is clear and that the content is tailored to the website's target audience.",
    },
    {
      question: "Website speed",
      answer: `Test the website's load time to ensure that it is fast and optimized for a smooth user experience. Slow website load times can negatively impact user engagement and conversion rates.`,
    },
    {
      question: "Mobile responsivenes",
      answer: `Check the website's responsiveness on mobile devices to ensure that it is optimized for a mobile-first audience. With more and more users accessing websites on mobile devices, having a mobile-friendly website is essential.`,
    },
    {
      question: "SEO",
      answer: `Review the website's SEO to ensure that it is optimized for search engines. Check things like metadata, alt tags, and keyword usage to ensure that the website's content is optimized for search engines.`,
    },
    {
        question: "Conversion rate optimization",
        answer: `Check the website's conversion rate optimization to ensure that it is designed to convert visitors into leads or customers. Ensure that the website's design and content are optimized for a clear and compelling call-to-action.`,
      },
    
  ];

class DigitalPresenceAudit extends Component {
    render(){
        return(
            <div className="container">
                <div className="component neuphmorphism">
                    <div className="illustration">

                    </div>
                    <Accordion questionsAnswers={questionsAnswers} />
                </div>
                </div>

        )
    }
}
export default DigitalPresenceAudit