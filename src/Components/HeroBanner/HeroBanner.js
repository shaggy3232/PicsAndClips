import "./HeroBanner.scss"

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
                        <p id="by-line">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div class="heading">
                        <h3 id="heading1">Decouvrez</h3>
                        <h3 id="heading2">la Jeune,</h3>
                        <h1 id="heading3">Beaute</h1>
                        </div>

                        <div class="short-bio">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat, quod sed optio nesciunt aspernatur inventore ab, nostrum accusantium harum dolor voluptate nulla!</p>

                        </div>

                        <a href="#" class="link" onClick={readMore}>Read More</a>
                    </div>

                    <div class="more-info " id="more-info-js">
                        <a href="#" class="link" onClick={readLess}>Read Less</a>
                    </div>

                    </div>

                    <div class="image-wrapper">
                    <div class="image-container">
                        <img class="image" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=755bbb2b0afd5808494a8723774cd141" alt="image of a young woman."/>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
    }
    
    export default HeroBanner