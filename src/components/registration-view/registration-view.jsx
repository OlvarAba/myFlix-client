import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       props.onRegistration(username)
    };

    axios.post('https://mantiflix.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self'); 
    })
    .catch(e => {
      console.log('error registering the user')
    });

    return (
      <Container>
        <Row>
          <Col>
          <CardGroup>
            <Card>
              <Card.Title>Register Here!</Card.Title>
            <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter a username"
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            placeholder="Password must be 8 characters long"
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
  
        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit
        </Button>
      </Form>

            </Card>
          

          </CardGroup>
          
          </Col>
        </Row>
      </Container>
      
    );
  }
  

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};