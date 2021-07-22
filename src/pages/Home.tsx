import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BestDeals from '../components/BestDeals';

const HomePage: React.FC = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <BestDeals />
      </>
   );
}

export default HomePage;