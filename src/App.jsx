import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Register from './component/Register';
import QuizList from './component/QuizList';
import QuizDetails from './component/QuizDetails';
import Login from './component/login'


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Register />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
