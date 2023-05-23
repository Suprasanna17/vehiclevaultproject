import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function GeneratePass() {
    return(
        <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="94********" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Model">
            <Form.Label>Vehicle Model</Form.Label>
            <Form.Control type="text" placeholder="Model" />
        </Form.Group>
        <Form.Group controlId="form.Vno">
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Vehicle Number" />
        </Form.Group>
        <Form.Group controlId="form.License">
            <Form.Label>License Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Licesne Id" />
        </Form.Group>
        <Form.Group controlId="form.TextArea">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <br/>
        <Button id="genbtn">Generate Pass</Button>
      </Form>
    </Container>
    );
}
export default GeneratePass;