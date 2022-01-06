import React from 'react';
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleHidden}) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick = { toggleHidden }/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => (
    {toggleHidden : () => dispatch(toggleHidden())}
)

export default connect (null, mapDispatchToProps)(CartIcon);