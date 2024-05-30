
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import ProtectedRoute from './Routes/ProtectedRoute';
import { history } from './helpers/history';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router history={history}>
      <HomePage />
      <Switch>
          <ProtectedRoute
              exact
              path="/"
              component={HomePage}
          />
          <Route
              path="/login"
              component={LoginPage}
          />
      </Switch>
    </Router>     
  )
}

export default App;
