import Image1 from "../../Assets/JordanPurp.PNG"
import Image2 from "../../Assets/JordanUmbreon.JPG"
import Image3 from "../../Assets/Kaaaaws.JPG"
import Image4 from "../../Assets/row-1-column-1.JPG"
import Image5 from "../../Assets/row-1-column-2.JPG"
import Image6 from "../../Assets/row-1-column-3.JPG"
import Image7 from "../../Assets/row-1-column-4.JPG"
import "./GalleryEntrance.scss"

const GalleryEntrance = (props) => {
    return(
        <div class="Gallerycontainer">
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"/>
          <div class="card__head">Plotting Cat</div>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"/>
          <div class="card__head">Angry Cat</div>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"/>
          <div class="card__head">Curious Cat</div>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"/>
          <div class="card__head">Prowling Cat</div>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"/>
          <div class="card__head">Sleepy Cat</div>
        </div>
      </div>
    )
    }
    
    export default GalleryEntrance