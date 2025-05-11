import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin.css';

const AdminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-navbar">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="admin-actions">
        <Link to="/addstudent" className="admin-btn">Add Student</Link>
        <Link to="/addfaculty" className="admin-btn">Add Faculty</Link>
        <Link to="/deletestudent" className="admin-btn">Delete Student</Link>
        <Link to="/deletefaculty" className="admin-btn">Delete Faculty</Link>
        <Link to="/viewstudents" className="admin-btn">View All Students</Link>
        <Link to="/viewfaculty" className="admin-btn">View All Faculty</Link>
      </div>
    </div>
  );
};

export default AdminHome;
