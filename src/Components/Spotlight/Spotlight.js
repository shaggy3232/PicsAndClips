import { Row, Col} from "react-bootstrap"
import "./Spotlight.css"
import Image1 from "../../Assets/OvertimeSammy1.jpeg"
import Image2 from "../../Assets/OvertimeSammy2.jpeg"
import Image3 from "../../Assets/OvertimeSammy3.jpeg"
const Spotlight = (props) => {
return(
    <div className = "bgS">
         <h2 className = "SpotlightTitle">Creator Spotlight</h2>
         <h1 className = "SpotlightHandle">{props.name}</h1>
         <div className = "gallery">
         <img className = "ART" src={Image1}/>
         <img className = "ART" src={Image2}/>
         <img className = "ART" src={Image3}/>
         </div>
         <div className = "Links">
            <a className = "instagram" href = "https://www.instagram.com/overtimesammy/"><img src="https://img.icons8.com/ios/50/4a90e2/instagram-new.png"/></a>
            <a className ="twitter" href = "https://twitter.com/overtimesammy"><img src="https://img.icons8.com/ios/50/4a90e2/twitter--v1.png"/></a>
         </div>
    </div>
)
}

export default Spotlight