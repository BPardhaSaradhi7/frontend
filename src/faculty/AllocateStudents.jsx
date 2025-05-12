import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllocateStudents = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [allocation, setAllocation] = useState({ studentId: '', courseId: '' });

  useEffect(() => {
    const fetchData = async () => {
      const s = await axios.get('http://localhost:3030/api/students');
      const c = await axios.get('http://localhost:3030/api/courses');
      setStudents(s.data);
      setCourses(c.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setAllocation({ ...allocation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:2007/api/allocate', allocation);
    alert('Student allocated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Allocate Students to Course</h2>
      <select name="studentId" onChange={handleChange} required>
        <option value="">Select Student</option>
        {students.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
      <select name="courseId" onChange={handleChange} required>
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>{c.courseName}</option>
        ))}
      </select>
      <button type="submit">Allocate</button>
    </form>
  );
};

export default AllocateStudents;
