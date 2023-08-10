import { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./ShopifySoloution.css"


class ShopifySoloution extends Component {
    render(){
        return(
<div className="container">
  <div class="heading">
    <h1 class="heading__title">Shopify Soloutions</h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">Expert Shopify Services for Your E-Commerce Success!</a></p>
  </div>
  <div class="cards">
    <div class="card card-1">
      <h2 class="card__title">Shopify store setup</h2>
      <p class="card__exit">We could help businesses create and set up their Shopify store, including choosing a theme, setting up payment and shipping options, and configuring basic store settings.</p>

    </div>
    <div class="card card-1">
      <h2 class="card__title">Custom Shopify Themes</h2>
      <p class="card__exit">Elevate your brand with tailor-made, eye-catching themes that capture your unique identity. Stand out from the competition with a custom design that reflects your vision and resonates with your target audience.</p>
    </div>
    <div class="card card-1">
      <h2 class="card__title">Product and collection organization</h2>
      <p class="card__exit">We could help businesses organize their products and collections in a logical and user-friendly way, ensuring that products are easy to find and purchase.</p>
    </div>

    <div class="card card-1">
      <h2 class="card__title">Integration with Third-Party Services</h2>
      <p class="card__exit">Streamline your operations by integrating Shopify with your preferred third-party tools, like inventory management systems, email marketing platforms, and more.</p>
    </div>

    <div class="card card-1">
      <h2 class="card__title">Inventory organization</h2>
      <p class="card__exit">Having this system optimized is crucial for the ability of your web store being able to scale with business need while maintaining easy navigation</p>
    </div>

    <div class="card card-1">
      <h2 class="card__title">Automation Management</h2>
      <p class="card__exit">Add workflows based on business needs to make fulfillment and follow up as efficient as possible using Shopify flows and custom scripts.</p>
    </div>

  </div>
</div>

        )
    }
}
export default ShopifySoloution