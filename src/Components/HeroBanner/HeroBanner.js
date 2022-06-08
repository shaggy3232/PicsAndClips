import "./HeroBanner2.scss"
import Image3 from "../../Assets/Kaaaaws.JPG"
function readMore() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");
    
    mainHeadings.style.transform = "scale(0.7)";
    expandInfo.style.height = "350px";
  } 
  function readLess() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");
    
    mainHeadings.style.transform = "scale(1)";
    expandInfo.style.height = "0px";
  } 
const HeroBanner = (props) => {

    return(
        <div>
            <div class="HeroContainer">
                <div class="container-inner">
                    <div class="main-content">
                    <div class="main-headings" id="main-headings-js">
                        <p id="by-line"> Pics and clips </p>

                        <div class="heading">
                        <h3 id="heading1">Let's</h3>
                        <h3 id="heading2">Make it</h3>
                        <h1 id="heading3">Happen</h1>
                        </div>

                        <div class="short-bio">
                        <p>I know you got some huge ideas in you! Its not always easy making those ideas turn to reality. I would hate to deprive the world of all the great oppurtunities that just could've been so, hit me up and lets get started to make what you have to offer happen.</p>
                        </div>

                        <a href="#" class="link" onClick={readMore}>Enquire</a>
                    </div>

                    <div class="more-info " id="more-info-js">
                        <a href="#" onClick>Get Started</a>
                        <p>I've seen so many people deprived of making there dreams reality because they don't know what the first step is. I will help you create the visual graphics you need whether it is a  whole brand identity, some clothing moc ups, or just some custom graphics to bring your feed to the next level. I got alot to offer so click the link and lets make it happen. </p>
                        <a href="#" class="link" onClick={readLess}>Read Less</a>
                    </div>

                    </div>

                    <div class="image-wrapper " >
                    <div class="image-container">
                        <img class="img" src={Image3}/>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
    }
    
    export default HeroBanner