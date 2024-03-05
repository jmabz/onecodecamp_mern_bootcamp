const calculateTotal = (cartItems) => {
    return cartItems
        .map(({price}) => price)
        .reduce((total, acc) => acc + total, 0);
}

module.exports = calculateTotal;