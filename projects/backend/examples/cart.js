let cartItems = [];

const addToCart = (product) => {
    cartItems = [...cartItems, product];
}

const removeFromCart = (id) => {
    cartItems = cartItems.filter(cartItem => cartItem.id !== id);
}

const getCartItems = () => { 
    return cartItems;    
}

module.exports = { addToCart, removeFromCart, getCartItems };