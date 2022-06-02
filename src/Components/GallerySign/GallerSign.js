import "./GallerySign.css"
import Image1 from "../../Assets/JordanPurp.PNG"
import Image2 from "../../Assets/JordanUmbreon.JPG"
import Image3 from "../../Assets/Kaaaaws.JPG"
import Image4 from "../../Assets/row-1-column-1.JPG"
import Image5 from "../../Assets/row-1-column-2.JPG"
import Image6 from "../../Assets/row-1-column-3.JPG"
import Image7 from "../../Assets/row-1-column-4.JPG"
const GallerySign = (props) => {
return(
    <div class="grid image-grid">

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img1" src={Image3} alt="Image"/>
      </a>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img2" src={Image3} alt="Image"/>
      </a>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img3" src={Image3} alt="Image"/>
      </a>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img4" src={Image3} alt="Image"/>
      </a>
    </div>
  </div>
</div>
)
}

export default GallerySign