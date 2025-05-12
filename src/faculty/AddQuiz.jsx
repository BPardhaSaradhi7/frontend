import React, { useState } from 'react';
import axios from 'axios';

const AddQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: '',
    courseId: '',
    totalQuestions: ''
  });

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2007/api/quizzes', quiz);
      alert('Quiz added!');
      setQuiz({ title: '', courseId: '', totalQuestions: '' });
    } catch (err) {
      console.error(err);
      alert('Quiz creation failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Quiz</h2>
      <input name="title" placeholder="Quiz Title" value={quiz.title} onChange={handleChange} required />
      <input name="courseId" placeholder="Course ID" value={quiz.courseId} onChange={handleChange} required />
      <input type="number" name="totalQuestions" placeholder="Total Questions" value={quiz.totalQuestions} onChange={handleChange} />
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default AddQuiz;
