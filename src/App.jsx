import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Login from './component/login';
import Register from './component/Register';
import QuizList from './component/QuizList';
import QuizDetails from './component/QuizDetails';


function App() {
  return (
    <Router>
      <Routes> {/* Wrap Route components in Routes */}
        <Route path="/login" element={<Login />} /> {/* Use element prop for components */}
        <Route path="/" element={<Register />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
