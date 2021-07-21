import React from "react";
import "../css/Hero.css";

import LinkTo from "../styled/Button";

const Hero: React.FC = () => {
   return (
      <section id="hero">
         <h1>E-Commerce <br />Store</h1>
         <p>The place to find your daily day to day groceries</p>
         
         <div className="buttons mt-3">
            <LinkTo className="mr-1" href="#">
               Buy Now
               <span className="material-icons ml-1 icon-1">shopping_bag</span>
            </LinkTo>
            
            <LinkTo outlined href="#bestDeals">
               <span>Best Deals</span>
               <span className="material-icons ml-1 icon-1">bolt</span>
            </LinkTo>
         </div>
      </section>
   );
}

export default Hero;