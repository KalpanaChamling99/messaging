import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  console.log('is login',isLoggedIn());
  return (
    <Route 
      {...rest}
      render={props => (
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      )}
    />
  );
};

export default ProtectedRoute;
