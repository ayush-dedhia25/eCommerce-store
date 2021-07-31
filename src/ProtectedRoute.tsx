import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export type protectedRouteProps = {
   isAuth: boolean;
} & RouteProps;

function PrivateRoute({ isAuth, ...restProps }: protectedRouteProps) {
   if (isAuth) {
      return <Route {...restProps} />
   } else {
      return <Redirect to={{ pathname: '/login' }} />
   }
}

export default PrivateRoute;