import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseCode: '',
    courseName: '',
    description: ''
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2007/api/courses', course);
      alert('Course added successfully!');
      setCourse({ courseCode: '', courseName: '', description: '' });
    } catch (error) {
      alert('Error adding course!');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <input name="courseCode" placeholder="Course Code" value={course.courseCode} onChange={handleChange} required />
        <input name="courseName" placeholder="Course Name" value={course.courseName} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={course.description} onChange={handleChange} />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
