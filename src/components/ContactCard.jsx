import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";

const ContactCard = ({ contact, onDelete, onEdit }) => {
  const [show, setShow] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contactInfo, setContactInfo] = useState(contact);

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(contactInfo);
    handleClose();
  };

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{`${contact.firstName} ${contact.lastName}`}</Card.Title>
          <Card.Text>{contact.phone}</Card.Text>
          <Card.Text>{contact.address}</Card.Text>
          <Button variant="danger" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={contactInfo.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={contactInfo.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={contactInfo.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ContactCard;
