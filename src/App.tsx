import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AddProduct from './pages/AddProduct';
import PrivateRoute from './ProtectedRoute';

interface IUserCred {
   ok: boolean;
   token: string;
   message: string;
}

const App: React.FC = () => {
   const [isAuth, setIsAuth] = useState<boolean>(false);
   
   useEffect(() => {
      const login = async () => {
         try {
            const response = await fetch('http://localhost:3001/api_v1/auth1', {
               method: 'POST',
               body: JSON.stringify({
                  email: 'johndoe@gmail.com',
                  password: 'john123'
               })
            });
            const result = await response.json();
            if (result && result.ok) localStorage.setItem('X-Access-Token', result.token);
            setIsAuth(result.ok);
         } catch (error) {
            setIsAuth(false);
         }
      }
      login();
      
   }, []);
   
   return (
      <>
         <Router>
            <Switch>
               <Route exact path="/" component={HomePage} />
               <PrivateRoute
                  exact path="/product/:id"
                  isAuth={isAuth}
                  component={ProductDetail}
               />
               <Route exact path="/addProduct" component={AddProduct} />
            </Switch>
         </Router>
      </>
   );
}

export default App;