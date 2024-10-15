import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getAllQuizzes } from '../services/quizService';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const QuizCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await getAllQuizzes();
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);

  return (
    <Container>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz._id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <Link to={`/quiz/${quiz._id}`}>
            <button>Take Quiz</button>
          </Link>
        </QuizCard>
      ))}
    </Container>
  );
};

export default QuizList;
