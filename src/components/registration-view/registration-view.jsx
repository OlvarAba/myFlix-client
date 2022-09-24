import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import './registration-view.scss';

export function RegistrationView(props) {
    const [ name, setName] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const [ values, setValues] = useState({
      nameErr: '',
      usernameErr: '',
      passwordErr: '',
      emailErr: '',
    });

    const validate = () => {
      let isReq = true;
      if (name) {
        setValues({ values, nameErr: "Name is required"});
        isReq = false;
      }
      if (!username) {
        setValues({ values, usernameErr: "Username is required" });
        isReq = false;  
      } else if (username.length < 5) {
        setValues({
          values,
          usernameErr: "Username must be 5 characters long.",
        });
        isReq = false;
      }
      if (!password) {
        setValues({ values, passwordErr: "Password Required" });
        isReq = false;
      } else if (password.length < 6) {
        setValues({
          values,
          passwordErr: "Password must be 6 characters long",
        });
      }
      if (!email) {
        setValues({ values, emailErr: "Email Required" });
        isReq = false;
      } else if (email.indexOf("@") === -1) {
        setValues({ values, emailErr: "Email is invalid" });
        isReq = false;
      }
      return isReq;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       const isReq = validate();
       if (isReq) {
        axios.post('https://mantiflix.herokuapp.com/users', {
      Name: name,
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      alert("Registration successful, please login");
      window.open('/', '_self'); 
    })
    .catch((response) => {
      console.error(response);
      alert("unable to register");
    });
       }
    };



    return (
        <Row className='mt=5'>
          <Col md={12}>
          <Form>
            <h3>Register Here</h3>
        <Form.Group controlId='formUsername' className='reg-inputs'>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Enter a Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {values.usernameErr && <p>{values.usernameErr}</p>}
        </Form.Group>
  
        <Form.Group controlId='formPassword' className='reg-inputs'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter a Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {values.passwordErr && <p>{values.passwordErr}</p>}
        </Form.Group>
  
        <Form.Group controlId='Email' className='reg-inputs'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter a Valid Email"
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
        <Button className='register' variant='primary' type='submit' onClick={handleSubmit}> Register</Button>
        <p></p>
        <p>
            Already registered? <Link to={"/"}>Sign in</Link>
          </p>  
      </Form>
          </Col>
        </Row>
    );
  }
  

  RegistrationView.propTypes = {
    register: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Birthday: PropTypes.string.isRequired,
    }),
  };