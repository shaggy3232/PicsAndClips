import { Row, Col} from "react-bootstrap"
import "./Spotlight.css"
import Image1 from "../../Assets/JordanPurp.PNG"
import Image2 from "../../Assets/JordanUmbreon.JPG"
import Image3 from "../../Assets/Kaaaaws.JPG"
import Image4 from "../../Assets/row-1-column-1.JPG"
import Image5 from "../../Assets/row-1-column-2.JPG"
import Image6 from "../../Assets/row-1-column-3.JPG"
import Image7 from "../../Assets/row-1-column-4.JPG"
const Spotlight = (props) => {
return(
    <div className = "bgS">
         <h2 className = "SpotlightTitle">Creator Spotlight</h2>
         <h1 className = "SpotlightHandle">{props.name}</h1>
    </div>
)
}

export default Spotlight