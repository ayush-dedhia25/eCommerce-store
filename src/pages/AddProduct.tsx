import React, { useState, useEffect, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import '../css/addProduct.css';
import { ProductFormData } from './type';
import { addFormData } from '../redux/actions';
import { RootState } from '../redux/type';

import Navbar from '../components/Navbar';
import Input from '../components/Input';
import { validationSchema } from '../formValidations/productValidation';

const Types: string[] = ['Oil', 'Fruits', 'Vegetables', 'Chocolates', 'Grains'];

const AddProduct: React.FC = () => {
   const formState = useSelector((state: RootState) => state.formData);
   const dispatch = useDispatch();
   
   const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
      resolver: yupResolver(validationSchema)
   });
   
   const onSubmit = handleSubmit((data: ProductFormData) => {
      alert(JSON.stringify(data));
      dispatch(addFormData(data));
   });
   
   useEffect(() => {
      alert(JSON.stringify(formState));
   }, [formState]);
   
   return (
      <>
         <Navbar />
         <section className="addProducts">
            <form onSubmit={onSubmit} className="addProducts__form">
               <h1 className="mb-3">Add a product</h1>
               <div className="form-group">
                  <input
                     id="productName"
                     type="text"
                     {...register('productName')}
                     className="form-control"
                     placeholder="e.g. Kissan Sauce"
                  />
                  <label htmlFor="productName">Product Name</label>
                  {errors && errors.productName?.message && (<small className="error-text">{errors.productName?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productWeight"
                     type="text"
                     {...register('productWeight')}
                     className="form-control"
                     placeholder="e.g. 1kg"
                  />
                  <label htmlFor="productWeight">Product Weight</label>
                  {errors && errors.productWeight && (<small className="error-text">{errors.productWeight?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productBrand"
                     type="text"
                     {...register('productBrand')}
                     className="form-control"
                     placeholder="e.g. Kissan"
                  />
                  <label htmlFor="productBrand">Product Brand</label>
                  {errors && errors.productBrand && (<small className="error-text">{errors.productBrand?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productPrice"
                     type="number"
                     {...register('productPrice')}
                     className="form-control"
                     placeholder="e.g. Rs.95"
                  />
                  <label htmlFor="productPrice">Product Price</label>
                  {errors && errors.productPrice && (<small className="error-text">{errors.productPrice?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productMgfDate"
                     type="text"
                     {...register('productMgfDate')}
                     className="form-control"
                     placeholder="e.g. 21/06"
                  />
                  <label htmlFor="productMgfDate">Product Manufacture Date (YY-MM)</label>
                  {errors && errors.productMgfDate && (<small className="error-text">{errors.productMgfDate?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productExpDate"
                     type="text"
                     {...register('productExpDate')}
                     className="form-control"
                     placeholder="e.g. 22-09"
                  />
                  <label htmlFor="productExpDate">Product Expiry Date (YY-MM)</label>
                  {errors && errors.productExpDate && (<small className="error-text">{errors.productExpDate?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productInStock"
                     type="number"
                     {...register('productInStock')}
                     className="form-control"
                     placeholder="e.g. 30pcs"
                  />
                  <label htmlFor="productInStock">Product In Stock Quantity</label>
                  {errors && errors.productInStock && (<small className="error-text">{errors.productInStock?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <select
                     id="productType"
                     {...register('productType')}
                     className="form-control"
                  >
                     <option disabled selected>Please choose the type</option>
                     {Types.map(type => (
                        <option key={type} value={type.toLowerCase()}>{type.toUpperCase()}</option>
                     ))}
                  </select>
                  <label htmlFor="productType">Product Type</label>
                  {errors && errors.productType && (<small className="error-text">{errors.productType?.message}</small>)}
               </div>
               
               <div className="form-group">
                  <input
                     id="productImgUrl"
                     type="url"
                     {...register('productImgUrl')}
                     className="form-control"
                     placeholder="e.g. https://your.img.url.com"
                  />
                  <label htmlFor="productImgUrl">Product Image Url</label>
                  {errors && errors.productImgUrl && (<small className="error-text">{errors.productImgUrl?.message}</small>)}
               </div>
               <button type="submit" className="submit-btn">Submit</button>
            </form>
         </section>
      </>
   );
}

export default AddProduct;