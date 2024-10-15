import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import QuizList from './component/QuizList';
import QuizDetails from './component/QuizDetails';
import Register from './component/Register';
import LoginComp from './component/Login';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<LoginComp />} /> 
        <Route path="/" element={<Register />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
