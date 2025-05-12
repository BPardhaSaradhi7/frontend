import React, { useState } from 'react';

const AttemptQuiz = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const submitQuiz = () => {
    console.log('Answers submitted:', answers);
    alert('Quiz submitted!');
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Q1. What is React?</p>
      <button onClick={() => handleAnswer('q1', 'a')}>Library</button>
      <button onClick={() => handleAnswer('q1', 'b')}>Framework</button>
      <br />
      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default AttemptQuiz;
