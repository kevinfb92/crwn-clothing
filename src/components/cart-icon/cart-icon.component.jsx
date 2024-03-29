import React from 'react';
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleHidden, itemCount}) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick = { toggleHidden }/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => (
    {toggleHidden : () => dispatch(toggleHidden())}
)

export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);