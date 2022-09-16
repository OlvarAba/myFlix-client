import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        props.onRegistration(username);
    };

    return (
        <Form>
          <h2>Welcome To myFlix</h2>
    
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter a username"
            />
            {values.usernameErr && <p>{values.usernameErr}</p>}
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
              placeholder="Password must be 8 characters long"
            />
            {values.passwordErr && <p>{values.passwordErr}</p>}
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {values.emailErr && <p>{values.emailErr}</p>}
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
    
          <Button type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </Form>
      );
    }

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};