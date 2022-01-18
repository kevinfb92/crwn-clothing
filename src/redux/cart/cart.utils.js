export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingItem){
        return(
            cartItems.map(item => item.id === itemToAdd.id 
                ? {...item, quantity: ++item.quantity} 
                : item)
                )
    }
    else{
        return [...cartItems, {...itemToAdd, quantity: 1}];
    }
    
}

export const removeItemFromCart = (cartItems, itemToRemove) =>{
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingItem.quantity === 1){
        return(cartItems.filter(item=>item.id !== itemToRemove.id));
    }
    else return(
        cartItems.map(item=>
            item.id === itemToRemove.id 
            ? {...item, quantity: item.quantity-1}
            : item)
    )

}