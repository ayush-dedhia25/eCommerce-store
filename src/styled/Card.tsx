/** @format */

import styled from 'styled-components'

export const Card = styled.div`
   position: relative;
   padding: 0.8rem;
   border: 1px solid #ccc;
   border-radius: 5px;
   overflow: hidden;
`

export const CardImg = styled.img`
   width: 100%;
   height: 100px;
   margin-top: 1.5rem;
   object-fit: contain;
`

export const BrandName = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   padding: 0.4rem 0.5rem;
   font-size: 0.8rem;
   font-family: 'Roboto', Sans-Serif;
   background-color: #ccc;
`

export const BuyButton = styled.button`
   width: 100%;
   margin-top: 0.5rem;
   padding: 0.4rem 0;
   border: none;
   border-radius: 3px;
   background-color: #f9dc5c;
   box-shadow: 1px 1px 8px #f9dc5c;
`

export const ProductName = styled.h5`
   margin-top: 0.5rem;
   letter-spacing: 1px;
`
