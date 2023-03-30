import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

 

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
        <Button variant="primary" type="submit" className="sub_btn">
          Submit
        </Button>
        <div className="dubl_btn">
        <a className="left">log in</a>
        <a className="right">back</a>
        </div>

        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
