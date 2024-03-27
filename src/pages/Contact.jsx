import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container justify-content-center align-items-center vh-100" style={{ marginTop: 80 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <p className="text-center sm: mt-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 34, fontFamily: "cursive" }}>Contact Support</p>
          <p className="text-center mb-4">We're always excited to discuss your needs. Get in touch with us and we'll get back to you as soon as possible.</p>

          <Form>
            <div className="row">
              <div className="col">
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text"   />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"   />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="tel"   />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}   />
            </Form.Group>

            <Button variant="primary" type="let's talk" className="w-100 mt-5 p-2" style={{backgroundColor:"gray"}}>let's talk</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;