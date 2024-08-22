import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./ContactForm.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { db } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "contactData");

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(name, email, phone, message);
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      phone: phone,
      message: message,
    });

    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 2500,
      className: "custom-toast",
      type: "success",
    });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const onHandleChangeNumeric = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setPhone(result);
  };

  return (
    <Container>
      <Card className="contact-form">
        <Card.Body>
          <Card.Text as="div">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3 form-labels">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 form-labels"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="form-input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 form-labels">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  className="form-input"
                  required
                  value={phone}
                  onChange={(e) => onHandleChangeNumeric(e)}
                  maxLength="10"
                />
              </Form.Group>

              <Form.Group className="mb-3 form-labels">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  className="form-input"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <button className="button">Send Message</button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactForm;
