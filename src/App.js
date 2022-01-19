import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument, onSnapshot} from './firebase/firebase.utils';

import {
  Switch,
  Route,
} from "react-router-dom";

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

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
        <Route exact path='/checkout' component={CheckOutPage}></Route>
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))  //this will give us the setCurrentUser() function in the props
  }
)
export default connect (mapStateToProps, mapDispatchToProps)(App);
