import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './student.css'; // Create and style this file as needed

const StudentNavbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'student') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="student-dashboard">
      <header className="student-navbar">
        <h2>Student Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="student-actions">
        <Link to="/viewprofile" className="student-btn">View Profile</Link>
        <Link to="/viewcourses" className="student-btn">View Courses</Link>
        <Link to="/submitassignments" className="student-btn">Submit Assignments</Link>
        <Link to="/grades" className="student-btn">View Grades</Link>
      </div>
    </div>
  );
};

export default StudentNavbar;
