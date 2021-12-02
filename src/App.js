import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}>
      </Route>
      <Route path='/shop' component={ShopPage}>
      </Route>
      <Route path='/signin' component={SignInAndSignUpPage}>
      </Route>      
    </Switch>
  
    </div>
  );
}

export default App;
