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