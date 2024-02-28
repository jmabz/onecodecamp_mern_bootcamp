import React, {useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const products = localStorage['shoppingCart'] ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

const OrderForm = () => {
    const [userDetails, setUserDetails] = useState({
        customerName: "",
        deliveryAddress: "",
        contactNumber: "",
        orders: new Map()
    });
    const [isShown, setIsShown] = useState(false);

    const handleSubmit = (event) => { 
        event.preventDefault();
        setIsShown(true);
    }

    const handleClose = () => setIsShown(false);

    const handleValueChange = (event) => {
        setUserDetails((data) => ({
            ...data,
            [event.target.id]: event.target.value
        }));
    }

    const handleChangeOrder = (event) => {
        let id = parseInt(event.target.dataset['id']);
        let orders = userDetails.orders;

        if (event.target.checked) {
            orders.set(id, products.find(product => product.id === id));
        } else {
            orders.delete(id);
        }

        setUserDetails((data) => ({
            ...data,
            orders: orders
        }));
    }

    const handleChangeQuantity = (event) => {
        let id = parseInt(event.target.dataset['id']);
        let orders = userDetails.orders;

        if (!orders.has(id)) {
            return;
        }

        let order = orders.get(id);
        let quantity = parseInt(event.target.value);

        order['quantity'] = (!isNaN(quantity) && quantity > 0) ? quantity : 0;
        orders.set(id, order);
        setUserDetails((data) => ({
            ...data,
            orders: orders
        }));
    }

    return (
        <div id="order-form-container">
            <h2>Order Form</h2>
            <Form id="order-form" onSubmit={handleSubmit}>
                <div>
                    <Form.Label htmlFor="customer-name">Customer Name:</Form.Label>
                    <Form.Control name="customer-name" type="text" id="customerName" onChange={handleValueChange} required></Form.Control>
                </div>
                <div>
                    <Form.Label htmlFor="delivery-address">Delivery Address</Form.Label>
                    <Form.Control as="textarea" name="delivery-address" id="deliveryAddress" onChange={handleValueChange} required></Form.Control>
                </div>
                <div>
                    <Form.Label htmlFor="contact-number">Contact Number</Form.Label>
                    <Form.Control name="contact-number" type="tel" id="contactNumber" pattern="09[0-9]{2}[0-9]{3}[0-9]{4}" onChange={handleValueChange} required></Form.Control>
                </div>
                <div>
                    <h3>Products</h3>
                    {products.map((product) => (
                        <div key={product.id}>
                            <Form.Check data-id={product.id} name="product" onChange={handleChangeOrder} label={product.name} />
                            <Form.Label htmlFor="quantity">Quantity</Form.Label>
                            <Form.Control data-id={product.id} type="number" name="quantity" onChange={handleChangeQuantity} min="0"></Form.Control>
                        </div>
                    ))}
                </div>
                <Button variant="primary" type="submit">Place Order</Button>
            </Form>
            <Modal show={isShown}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Complete!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span>Customer Name: </span>
                        <span>{userDetails.customerName}</span>
                    </div>
                    <div>
                        <span>Delivery Address: </span><br/>
                        <p>{userDetails.deliveryAddress}</p>
                    </div>
                    <div>
                        <span>Contact Number: </span>
                        <span>{userDetails.contactNumber}</span>
                    </div>
                    <h3>Order Details</h3>
                    <div>
                    {Array.from(userDetails.orders.values())
                            .filter(order => order.quantity > 0)
                            .map(order => (
                                <div>
                                    <span>{order.name} (x {order.quantity}): </span>
                                    <span>{order.price * order.quantity}</span>
                                </div>
                            ))}
                    </div>
                    <div>
                        <span>Total: </span>
                        <span>{Array.from(userDetails.orders.values())
                            .filter(order => order.quantity > 0)
                            .map(({quantity, price}) => quantity * price)
                            .reduce((total, newPrice) => total + newPrice, 0)}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OrderForm;