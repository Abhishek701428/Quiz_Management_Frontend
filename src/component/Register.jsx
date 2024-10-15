import React, { useState } from 'react';
import styled from '@emotion/styled';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      alert('Registration successful! Redirecting to login...');
      navigate('/login'); // Redirect to Login page
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
