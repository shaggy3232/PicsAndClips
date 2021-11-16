import { Col, Container, Row } from "react-bootstrap"
import "./AssetArsenal.css"
import ColorGradingCentral from "../../Assets/ColorGradingCentral.png"
import MotionBro from "../../Assets/MotionBro.png"
import panzoid from "../../Assets/Panzoid.svg"
import jitter from "../../Assets/Jitter.jpg"
import Mixkit from "../../Assets/Mixkit.jpg"
import removebg from "../../Assets/removebg.svg"
import nounproject from "../../Assets/nounproject.png"
import brusheezy from "../../Assets/brusheezy.png"
import myfonts from "../../Assets/myfonts.png"
import meshgradient from "../../Assets/MeshGradient.png"
import spline from "../../Assets/spline.png"
import unblast from "../../Assets/unblast.svg"
import unscreen from "../../Assets/unscreen.svg"
import Pitch from "../../Assets/Pitch.png"
import seeklogo from "../../Assets/seeklogo.png"
import icons8 from "../../Assets/Icons8.png"
import kamua from "../../Assets/kamua.png"
import previewed from "../../Assets/previewed.jpg"
import morflax from "../../Assets/morflax.jpg"
import LinkButton from "../LinkButtons/LinkButtons"

const AssetArsenal = () => {
    return(
        <div className = "bgA">
            <h1 className="title">Asset Arsenal</h1>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={ColorGradingCentral}/> </Row>
                        <Row className = "AssetDescription"> 70 free Luts to use in premier pro to help add a level of professionalism to your video</Row>
                        <Row><LinkButton link = "https://www.colorgradingcentral.com/free-luts/ "/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={MotionBro}/> </Row>
                        <Row className = "AssetDescription"> Presets for PremierPro and AfterEffects to save time in your editing workflow</Row>
                        <Row><LinkButton link = "https://www.colorgradingcentral.com/free-luts/ "/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={panzoid}/> </Row>
                        <Row className = "AssetDescription"> Free virtual editor to create 3d youtube intro and graphics</Row>
                        <Row><LinkButton link = "https://panzoid.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText" >
                        <Row><img className = "logo" src={jitter}/> </Row>
                        <Row className = "AssetDescription">Animate your designs easily. Export your creations as videos or GIFs. All in your browser.</Row>
                        <Row><LinkButton link = "https://jitter.video"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={Mixkit}/> </Row>
                        <Row className = "AssetDescription">Free gallery of awesome stock video clips, music tracks, sound effects and video templates</Row>
                        <Row><LinkButton link = "https://mixkit.co"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={removebg}/> </Row>
                        <Row className = "AssetDescription"> Easily remove the background of your images in the click of a button</Row>
                        <Row><LinkButton link = "https://www.remove.bg"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={brusheezy}/> </Row>
                        <Row className = "AssetDescription">Free Photoshop brushes</Row>
                        <Row><LinkButton link = "https://www.brusheezy.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={myfonts}/> </Row>
                        <Row className = "AssetDescription">Find what fonts are being used in your favourite websites</Row>
                        <Row><LinkButton link = "https://www.myfonts.com/WhatTheFont/"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={nounproject}/> </Row>
                        <Row className = "AssetDescription">Free icons and pictures for website or graphics</Row>
                        <Row><LinkButton link = "https://thenounproject.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={meshgradient}/> </Row>
                        <Row className = "AssetDescription">Free Mesh gradient to inspire or put right into your projects</Row>
                        <Row><LinkButton link = "https://www.meshgradients.design"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={unblast}/> </Row>
                        <Row className = "AssetDescription">Selection of fine and free design resources made by the world's best designers.</Row>
                        <Row><LinkButton link = "https://unblast.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={spline}/> </Row>
                        <Row className = "AssetDescription">Use text, create basic geometric shapes, edit materials, import 3d models, and more. Control the outcome of your design work.</Row>
                        <Row><LinkButton link = "https://unblast.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={unscreen}/> </Row>
                        <Row className = "AssetDescription">Remove Video Background</Row>
                        <Row><LinkButton link = "https://www.unscreen.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={Pitch}/> </Row>
                        <Row className = "AssetDescription">Free presentation templates the have been used by professionals around the world</Row>
                        <Row><LinkButton link = "https://pitch.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={kamua}/> </Row>
                        <Row className = "AssetDescription">Risize and caption you videos automatically</Row>
                        <Row><LinkButton link = "https://kamua.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={seeklogo}/> </Row>
                        <Row className = "AssetDescription">400.000+ vector brand logos and logo templates!</Row>
                        <Row><LinkButton link = "https://seeklogo.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={previewed}/> </Row>
                        <Row className = "AssetDescription">The simplest way to create device mockups. All in your browser</Row>
                        <Row><LinkButton link = "https://previewed.app"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={morflax}/> </Row>
                        <Row className = "AssetDescription">Generate 3D device mockup in a quick and engaging way.</Row>
                        <Row><LinkButton link = "https://things.morflax.com"/></Row>
                    </Col>
                </Container>
            </div>
            <div className= "Assets">
                <Container>
                    <Col className = "AssetText">
                        <Row><img className = "logo" src={icons8}/> </Row>
                        <Row className = "AssetDescription">Icons, illustrations, photos, music, and design tools</Row>
                        <Row><LinkButton link = "https://icons8.com"/></Row>
                    </Col>
                </Container>
            </div>
        </div>
    )
}
export default AssetArsenal