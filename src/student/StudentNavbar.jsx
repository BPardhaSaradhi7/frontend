import React from 'react';
import { Link } from 'react-router-dom';
import './StudentNavbar.css';

const StudentNavbar = () => (
  <nav className="student-navbar">
    <Link to="/student/dashboard">Dashboard</Link>
    <Link to="/student/courses">My Courses</Link>
    <Link to="/student/attempt-quiz">Attempt Quiz</Link>
    <Link to="/student/profile">Profile</Link>
  </nav>
);

export default StudentNavbar;
