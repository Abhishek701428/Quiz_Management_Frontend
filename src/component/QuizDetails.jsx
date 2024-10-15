import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getQuizDetails } from '../services/quizService';

const Container = styled.div`
  padding: 20px;
`;

const QuestionCard = styled.div`
  margin: 10px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const QuizDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuizDetails = async () => {
      const data = await getQuizDetails(id);
      setQuiz(data);
    };
    fetchQuizDetails();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate score
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.options[question.correctAnswer]) {
        score++;
      }
    });

    alert(`Your score: ${score}/${quiz.questions.length}`);
    navigate('/quizzes'); 
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <Container>
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <QuestionCard key={index}>
            <p>{question.question}</p>
            {question.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => setAnswers({ ...answers, [index]: option })}
                  required
                />
                {option}
              </label>
            ))}
          </QuestionCard>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </Container>
  );
};

export default QuizDetails;
