import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './registration.css';
import { NavLink } from 'react-router-dom';

export function Reg() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed_password, setConfirmed_Password] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const handleLogin=()=>{
    const isUsername=username.trim();
    const isEmail=email.trim();
    const isPassword=password.trim();
    const isConfirmed_password=confirmed_password.trim();
  
  const sendData = () => {
    const data = {username:isUsername, email:isEmail, password:isPassword, confirmed_password:isConfirmed_password};
    const url = '/login';
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username||!password||!email||!confirmed_password) {
      setIsValid(false);
      return;
    }else{

    }
    
  }
   
  const handleUserChange = (event) => {
    setUsername(event.target.value);
    setIsValid(true);
  }
  const handlePassChange = (event) => {
    setPassword(event.target.value);
    setIsValid(true);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValid(true);
  }
  const handleConfirmPassChange = (event) => {
    setConfirmed_Password(event.target.value);
    setIsValid(true);
  }

  return (
    <Container className="conteiner">
      
      <Form onSubmit={handleSubmit} className="content_conteiner">
      <h1>Registration</h1>
        <Form.Group controlId="formBasicUsername" className="user_block">
        
          <Form.Control type="text" placeholder="Username" value={username} onChange={handleUserChange} className={`form-control ${!isValid && !username ? 'is-invalid' : ''} use_inp`} />
        
       
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="mail_block">
          
          
          <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} className={`form-control ${!isValid && !email ? 'is-invalid' : ''} email_inp`}  />
        
        
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="pass_block">
          
          
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassChange} className={`form-control ${!isValid && !password ? 'is-invalid' : ''} pass_inp`}  />
        
        
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword" className="confirm_pass_block">
          
          
          <Form.Control type="password" placeholder="Confirm password" value={confirmed_password} onChange={handleConfirmPassChange} className={`form-control ${(!isValid && !confirmed_password)||confirmed_password!==password ? 'is-invalid' : ''} confirm_pass_inp`}   />
        
        
        </Form.Group>
        <Form.Group className="but_n_div">
        <Button variant="primary" type="submit" className="sub_btn" onClick={handleLogin}>
          Submit
        </Button>
        <div className="dubl_btn">
        <div className="left"><NavLink to="/" className="style_non">Sing in</NavLink></div>
        <div className="right"><a >Back</a></div>
        </div>

        </Form.Group>
      </Form>
    </Container>
  );
};
