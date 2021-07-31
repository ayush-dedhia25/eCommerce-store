import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/BestDeals.css';

import data from '../products.json';
import Container from '../styled/Container';
import { Card as ProductComponent, CardImg, BrandName, BuyButton, ProductName } from '../styled/Card';
import Grid from '../styled/Grid';

interface IProduct {
   id: number;
   name: string;
   weight: string;
   price: number;
   brand: string;
   mfgDate: Date;
   expDate: Date;
   quantityAvailable: number;
   prodType: string;
   imgUrl: string;
}

interface IResponse {
   ok: boolean;
   message: string;
   products: IProduct[];
}

enum ProductEnum {
   Oil = 'OIL',
   Vegetables = 'VEGETABLES',
   Fruits = 'FRUITS',
   Grains = 'GRAINS',
   Chocolates = 'CHOCOLATES'
}

const RateComponent: React.FC<{ rate: number }> = ({ rate }) => {
   const rating = new Array(rate).fill(null);
   return (
      <small className="rating mt-1">
         {rating.map(_ => (
            <span className="material-icons">star</span>
         ))}
      </small>
   );
}

const BestDeals: React.FC = () => {
   const [products, setProducts] = useState<IProduct[]>([]);

   useEffect(() => {
      
      const fetchProducts = async () => {
         try {
            const response = await fetch('http://localhost:3001/api_v1/products', {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('X-Access-Token')}`
               }
            });
            alert(JSON.stringify(response));
            // setProducts();
         } catch (err) {
            alert(err);
         }
      }
      fetchProducts();
      
   }, []);

   return (
      <section id="bestDeals">
         <Container>
            <h1 className="section-heading mb-1">
               Best Deals <span className="material-icons icon-3">bolt</span>
            </h1>
            <Grid>
               
            </Grid>
         </Container>
      </section>
   )
}

export default BestDeals
