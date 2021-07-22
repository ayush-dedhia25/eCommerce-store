import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import GuardedRoute from './ProtectedRoute';

const App: React.FC = () => {
   return (
      <>
         <Router>
            <Switch>
               <Route exact path="/" component={HomePage} />
               <GuardedRoute isAuthenticated={false} authenticationPath="/" exact path="/product/:id" component={ProductDetail} />
            </Switch>
         </Router>
      </>
   );
}

export default App;