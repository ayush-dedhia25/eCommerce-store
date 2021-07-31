/** @format */

import React from 'react'
import '../css/Navbar.css'

const Navbar: React.FC = () => {
   return (
      <nav className="navbar">
         <span className="material-icons">menu</span>
         <h2>eCommerce Store</h2>
         <span className="material-icons">account_circle</span>
      </nav>
   )
}

export default Navbar
