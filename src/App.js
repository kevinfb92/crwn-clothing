import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { onSnapshot } from './firebase/firebase.utils';

import {
  Switch,
  Route,
} from "react-router-dom";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      this.setState({currentUser : userAuth});
      console.log(userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          this.setState({
            currentUser :{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=>console.log(this.state))
        })
      }
      
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
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

}

export default App;
