import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";

const INTIIAL_STATE = {
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INTIIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_HIDDEN:
            return({...state, hidden : !state.hidden});
        case CartActionTypes.ADD_ITEM:
            return{
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter( item => item.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return(state)
    }
}

export default cartReducer;