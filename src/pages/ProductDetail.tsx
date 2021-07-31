import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
   const { id } = useParams<{ id: string }>();

   return (
      <>
         <h1>Product Details Page {id}</h1>
      </>
   )
}

export default ProductDetail;
