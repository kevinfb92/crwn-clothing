import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument, onSnapshot} from './firebase/firebase.utils';

import {
  Switch,
  Route,
} from "react-router-dom";

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {


  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      else{          
        this.props.setCurrentUser(userAuth);
      }
      
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}>
        </Route>
        <Route path='/shop' component={ShopPage}>
        </Route>
        <Route exact path='/signin' 
          render={()=> this.props.currentUser ? ( <Redirect to='/'/>) : (<SignInAndSignUpPage/>)
          }
        >
        </Route>      
      </Switch>
    
      </div>
    );
  }

}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))  //this makes a dispatch function setCurrentUser that will call the "setCurrentUser" from the user.action.js passing the user as a parameter
  }
)
export default connect (mapStateToProps, mapDispatchToProps)(App);
