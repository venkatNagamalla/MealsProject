import { Component } from "react";
import { IoMdClose } from "react-icons/io";

import "./index.css";

class Banner extends Component {

 state = {showBanner:true}

 updateBanner = () => this.setState({showBanner:false})

 renderBanner = () => <section className="banner-container">
 <section className="banner-inner-container">
   <div>
     <h1 className="banner-heading">Explore Your Meal Recipe!</h1>
     <p className="banner-text">
       A recipe is a formula of ingredients and a list of instructions
       for creating prepared foods
     </p>
   </div>
   <img
     className="banner"
     src="https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg"
     alt="banner"
   />
 </section>
 <button onClick={this.updateBanner} className="close" type="button"><IoMdClose/></button>
</section>

  render() {
    
    const {showBanner} = this.state

    return (
       showBanner && this.renderBanner()
    );
  }
}

export default Banner;
