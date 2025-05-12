import React from 'react';
import { Link } from 'react-router-dom';
import './FacultyNavbar.css';

const FacultyNavbar = () => {
  return (
    <nav className="faculty-navbar">
      <div className="faculty-logo">LMS Faculty</div>
      <ul className="faculty-nav-links">
        <li><Link to="/add-course">Add Course</Link></li>
        <li><Link to="/add-assignment">Add Assignment</Link></li>
        <li><Link to="/add-quiz">Add Quiz</Link></li>
        <li><Link to="/allocate-students">Allocate Students</Link></li>
        <li><Link to="/update-course">Update Course</Link></li>
        <li><Link to="/view-reports">View Reports</Link></li>
      </ul>
    </nav>
  );
};

export default FacultyNavbar;
