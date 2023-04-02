import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import './home.css'
import { NavLink } from 'react-router-dom';

export function Log() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const handleLogin=()=>{
    const uservar=username;
    const userpas=password;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username||!password) {
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

  return (
    <Container className="conteiner">
      
      <Form onSubmit={handleSubmit} className="content_conteiner">
      <h1>Sing in</h1>
        <Form.Group controlId="formBasicUsername" className="user_block">
        
          <Form.Control type="text" placeholder="Username" value={username} onChange={handleUserChange} className={`form-control ${!isValid && !username ? 'is-invalid' : ''} use_inp`} />
        
       
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="pass_block">
          
          
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassChange} className={`form-control ${!isValid && !password ? 'is-invalid' : ''} pass_inp`}  />
        
        
        </Form.Group>
        <Form.Group className="but_n_div">
        <Button variant="primary" type="submit" className="sub_btn" onClick={handleLogin}>
          Submit
        </Button>
        <div className="dubl_btn">
        <div className="left"><NavLink to="/registration" className="style_non">Log in</NavLink></div>
        <div className="right"><a >Back</a></div>
        </div>

        </Form.Group>
      </Form>
    </Container>
  );
};
