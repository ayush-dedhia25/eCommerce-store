import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
   const { id } = useParams<{id: number}>();
   const productId: number = +id;
   
   return (
      <>
         <h1>Product Details Page {productId}</h1>
      </>
   );
}

export default ProductDetail;