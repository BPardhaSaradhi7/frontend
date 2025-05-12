import React, { useState } from 'react';
import axios from 'axios';

const UpdateCourseParticulars = () => {
  const [courseId, setCourseId] = useState('');
  const [courseDetails, setCourseDetails] = useState({ courseName: '', description: '' });

  const fetchCourse = async () => {
    const res = await axios.get(`http://localhost:3030/api/courses/${courseId}`);
    setCourseDetails(res.data);
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3030/api/courses/${courseId}`, courseDetails);
    alert('Course updated!');
  };

  return (
    <div>
      <h2>Update Course</h2>
      <input placeholder="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      <button onClick={fetchCourse}>Fetch</button>
      <input placeholder="Name" value={courseDetails.courseName} onChange={(e) => setCourseDetails({ ...courseDetails, courseName: e.target.value })} />
      <textarea placeholder="Description" value={courseDetails.description} onChange={(e) => setCourseDetails({ ...courseDetails, description: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateCourseParticulars;
