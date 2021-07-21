import React, { useState, useEffect } from "react";
import "../css/BestDeals.css";

import data from "../products.json";
import Container from "../styled/Container";
import {
   Card as ProductComponent,
   CardImg,
   BrandName,
   BuyButton,
   ProductName
} from "../styled/Card";
import Grid from "../styled/Grid";

interface Product {
   id: number;
   name: string;
   variant: string;
   price: number;
   brand: string;
   rating: number;
   imgUrl: string;
}

const RateComponent : React.FC<{rate: number}> = ({ rate }) => {
   const rating = new Array(rate).fill(null);
   return (
      <small className="rating mt-1">
      {rating.map(_ => (
         <span className="material-icons">star</span>
      ))}
      </small>
   );
}

const BestDeals : React.FC = () => {
   const [products, setProducts] = useState<Product[] | null>(null);
   
   useEffect(() => {
      setProducts(data.products);
   }, []);
   
   return (
      <section id="bestDeals">
         <Container>
            <h1 className="section-heading mb-1">Best Deals</h1>
            <Grid>
               {products && products.map(prod => (
                  <ProductComponent>
                     <BrandName>{prod.brand}</BrandName>
                     <CardImg src={prod.imgUrl} alt={prod.name} />
                     <ProductName>{prod.name}</ProductName>
                     <RateComponent rate={prod.rating} />
                     <BuyButton>
                        <span>Buy for &nbsp;</span>
                        <strong>&#8377;{prod.price}</strong>
                     </BuyButton>
                  </ProductComponent>
               ))}
            </Grid>
         </Container>
      </section>
   );
}

export default BestDeals;