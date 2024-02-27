import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Shop.css';

const products = [
    {id: 1, name: "Limited Edition V88 T-shirt", price: 300},
    {id: 2, name: "Limited Edition V88 Cap", price: 150}
];

const items = localStorage['shoppingCart'] ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

const Shop = () => {
    const [shoppingCart, setShoppingCart] = useState(new Map(items.map(item => [item.id, item])));
    const handleBuy = (event) => {
        let id = parseInt(event.target.dataset['id']);
        let product = products.find(product => product.id === id);

        if (shoppingCart.get(id)) {
            shoppingCart.delete(id);
        } else {
            shoppingCart.set(id, product);
        }
        setShoppingCart(shoppingCart => new Map([...shoppingCart]));
        localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart.values()]));
    };

    return (
        <div>
            <h2>Shop</h2>
            <div id="shop-items">
                {products.map(product => (
                    <Card className="shop-items__item" key={product.id}>
                        <Card.Img variant="top" src="https://picsum.photos/200/300"></Card.Img>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Button onClick={handleBuy} data-id={product.id} variant="primary">{shoppingCart.has(product.id) ? "On Hand" : "Buy"}</Button>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default Shop;