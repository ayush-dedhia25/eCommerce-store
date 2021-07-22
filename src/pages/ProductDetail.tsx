import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail : React.FC = () => {
   const { id } : { id: string } = useParams();
   
   return (
      <>
         <h1>Product Details Page {id}</h1>
      </>
   );
}

export default ProductDetail;