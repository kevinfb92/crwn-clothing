import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const CartDropwdown = ({cartItems, history, toggleHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                cartItems.map(item => <CartItem key={item.id} item={item} />)   
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            ()=>{
                history.push('/checkout');
                toggleHidden()
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});
const mapDispatchToProps = dispatch => ({
    toggleHidden : () => dispatch(toggleHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropwdown));