import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddStudent from './admin/AddStudent';
import AddFaculty from './admin/AddFaculty';
import DeleteStudent from './admin/DeleteStudent';
import DeleteFaculty from './admin/DeleteFaculty';
import ViewAllStudents from './admin/ViewAllStudents';
import ViewAllFaculty from './admin/ViewAllFaculty';
import AdminHome from './admin/AdminHome';
import LoginPage from './components/Auth/LoginPage';
import './admin/admin.css';

const App = () => {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={role === "admin" ? <AdminHome /> : <Navigate to="/" />} />
        <Route path="/addstudent" element={role === "admin" ? <AddStudent /> : <Navigate to="/" />} />
        <Route path="/addfaculty" element={role === "admin" ? <AddFaculty /> : <Navigate to="/" />} />
        <Route path="/deletestudent" element={role === "admin" ? <DeleteStudent /> : <Navigate to="/" />} />
        <Route path="/deletefaculty" element={role === "admin" ? <DeleteFaculty /> : <Navigate to="/" />} />
        <Route path="/viewstudents" element={role === "admin" ? <ViewAllStudents /> : <Navigate to="/" />} />
        <Route path="/viewfaculty" element={role === "admin" ? <ViewAllFaculty /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
