import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const Contact = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClose = (event) => { 
        setIsShown(false);
    }

    const handleSend = (event) => {
        event.preventDefault();
        setIsShown(true);
    }

    return (
        <>
            <div>
                <h1>Contact</h1>
                <p>Got a project in mind or need help with? Interested in collaborating? Just here to say hi? Don't hesitate to contact me from here!</p>

                <Form onSubmit={handleSend}>
                    <FloatingLabel className="mb-3" controlId="email" label="Email Address">
                        <Form.Control type="email" required></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="topic" label="Topic">
                        <Form.Control type="text" required></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="message" label="Message">
                        <Form.Control as="textarea" rows={5} style={{ 'height': '300px' }} required></Form.Control>
                    </FloatingLabel>
                    <Button type="submit">Send</Button>
                </Form>

                <Modal show={isShown}>
                    <Modal.Header closeButton>
                        <Modal.Title>Message sent!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for reaching out!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Contact;