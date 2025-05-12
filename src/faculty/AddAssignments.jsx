import React, { useState } from 'react';
import axios from 'axios';
import './faculty.css';

const AddAssignments = () => {
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    courseId: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const response = await axios.post('http://localhost:2007/api/assignments', assignment);
      if (response.status === 201 || response.status === 200) {
        setSuccess('Assignment added successfully!');
        setAssignment({ title: '', description: '', dueDate: '', courseId: '' });
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      setError('Failed to add assignment. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="faculty-form-container">
      <h2>Add Assignment</h2>
      <form className="faculty-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={assignment.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={assignment.description}
          onChange={handleChange}
          rows="4"
        />
        <input
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="courseId"
          placeholder="Course ID"
          value={assignment.courseId}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Assignment</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddAssignments;
