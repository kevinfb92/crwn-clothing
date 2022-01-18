import React from 'react';

import './checkout-item.styles.scss';

import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;
                </div>
                <div className="value">
                    {quantity}
                </div>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;
                </div>
                
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item=> dispatch(removeItemFromCart(item)),
    addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);