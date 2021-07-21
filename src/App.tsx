import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import data from "./products.json";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestDeals from "./components/BestDeals";

const App: React.FC = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <BestDeals />
      </>
   );
}

export default App;