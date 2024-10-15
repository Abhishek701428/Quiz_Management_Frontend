import React, { useState } from 'react';
import styled from '@emotion/styled';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
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
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email, password });
      localStorage.setItem('token', token); // Store the JWT token
      navigate('/quizzes'); // Redirect to quiz list page after login
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
