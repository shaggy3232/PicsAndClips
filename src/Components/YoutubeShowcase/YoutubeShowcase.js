import { Col, Row } from "react-bootstrap"
import "./YoutubeShowcase.css"
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

const YoutubeShowcase = () => {

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

    return (
        <div className = "bgY">
            <Row>
                <Col>
                    <Row><h1 className = "ShowcaseTitle">Youtube Showcase</h1></Row>
                    <Row><h2 className = "showcaseChannel">Bryan Delimata</h2></Row>
                    <h1 className = "showcaseDescription">Visual artist making youtube tutorials. With tons of tutorial in both Premier Pro and After Effects to help give your videos another level of editing</h1>
                    <Row><div className = "links"> 
                        <a className = "youtube" href = "https://www.youtube.com/c/BryanDelimata"><img src="https://img.icons8.com/ios/50/4a90e2/youtube-play--v2.png"/></a>
                        <a className = "instagram" href = "https://www.instagram.com/bryandelimata/"><img src="https://img.icons8.com/ios/50/4a90e2/instagram-new.png"/></a>
                        <a className ="twitter" href = "https://twitter.com/bryandelimata"><img src="https://img.icons8.com/ios/50/4a90e2/twitter--v1.png"/></a>
                    </div></Row>
                </Col>
                <Col>
                    <YouTube className = "Video" videoId={getYouTubeID("https://www.youtube.com/watch?v=1uw6tf28Yr4")} opts={opts}/>
                </Col>
            </Row>
        </div>
    )
       
}

export default YoutubeShowcase