import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './student/StudentDashboard';
import StudentProfile from './student/StudentProfile';
import MyCourses from './student/MyCourses';
import AttemptQuiz from './student/AttemptQuiz';
import RegisterForm from './student/RegisterForm';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/courses" element={<MyCourses />} />
        <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
        <Route path="/student/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
