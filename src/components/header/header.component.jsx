import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropwdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo } from '../../assets/crown.svg'
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => (
    <div className="header">
            <Link className="logo-container" to="/">
                <Logo className='logo'/>
            </Link>        

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>        
                <Link className="option" to="/shop">
                    CONTACT
                </Link>    

                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon/>
                {
                    !hidden ?
                    <CartDropwdown/>
                    :
                    null
                }
            </div>
            
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectHidden
})
//(/*destrucuring state: */ {user: {currentUser}, cart: {hidden}}) => ({currentUser, hidden})

export default connect(mapStateToProps)(Header);