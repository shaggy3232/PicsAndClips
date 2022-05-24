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

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img5" src="https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no" alt="Image"/>
      </a>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <a class="tile-link" href="#">
        <img class="tile-img tile-img6" src="https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no" alt="Image"/>
      </a>
    </div>
  </div>

</div>
)
}

export default GallerySign