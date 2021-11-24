import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>  
          </Route>      
          <Route path='/shop'>
            <ShopPage/>
          </Route>
        </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
