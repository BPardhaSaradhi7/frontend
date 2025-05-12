import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

import StudentDashboard from './student/StudentDashboard';
import StudentProfile from './student/StudentProfile';
import MyCourses from './student/MyCourses';
import AttemptQuiz from './student/AttemptQuiz';
import RegisterForm from './student/RegisterForm';

import AddAssignments from './faculty/AddAssignments';
import AddCourse from './faculty/AddCourse';
import AddQuiz from './faculty/AddQuiz';
import AllocateStudents from './faculty/AllocateStudents';
import UpdateCourseParticulars from './faculty/UpdateCourseParticulars';
import ViewReports from './faculty/ViewReports';
import FacultyNavbar from './faculty/FacultyNavbar';

import AddStudent from './admin/AddStudent';
import AddFaculty from './admin/AddFaculty';
import DeleteStudent from './admin/DeleteStudent';
import DeleteFaculty from './admin/DeleteFaculty';
import ViewAllStudents from './admin/ViewAllStudents';
import ViewAllFaculty from './admin/ViewAllFaculty';
import AdminNavbar from './admin/AdminNavbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/courses" element={<MyCourses />} />
        <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
        <Route path="/student/register" element={<RegisterForm />} />

        <Route path="/faculty/dashboard" element={<FacultyNavbar />} />
        <Route path="/faculty/add-assignment" element={<AddAssignments />} />
        <Route path="/faculty/add-course" element={<AddCourse />} />
        <Route path="/faculty/add-quiz" element={<AddQuiz />} />
        <Route path="/faculty/allocate-students" element={<AllocateStudents />} />
        <Route path="/faculty/update-course" element={<UpdateCourseParticulars />} />
        <Route path="/faculty/view-reports" element={<ViewReports />} />

        <Route path="/admin/navbar" element={<AdminNavbar />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/add-faculty" element={<AddFaculty />} />
        <Route path="/admin/delete-student" element={<DeleteStudent />} />
        <Route path="/admin/delete-faculty" element={<DeleteFaculty />} />
        <Route path="/admin/view-students" element={<ViewAllStudents />} />
        <Route path="/admin/view-faculty" element={<ViewAllFaculty />} />
      </Routes>
    </Router>
  );
}

export default App
