/** @format */

import styled from 'styled-components'

interface LinkProps {
   outlined?: boolean
}

const LinkTo = styled.a<LinkProps>`
   display: block;
   width: 100%;
   border: none;
   padding: 0.8rem 0;
   color: #000;
   text-transform: uppercase;
   font-family: 'Roboto', Sans-Serif;
   font-weight: 500;
   letter-spacing: 1px;
   text-decoration: none;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #ffffff;
   border-radius: 5px;

   ${props =>
      props.outlined &&
      `
      border: 2px solid #ffffff;
      background: none;
      color: #ffffff;
   `}
`

export default LinkTo
