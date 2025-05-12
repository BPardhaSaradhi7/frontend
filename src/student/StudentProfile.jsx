import React, { useEffect, useState } from 'react';
import StudentNavbar from './StudentNavbar';

const StudentProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('http://localhost:2007/student/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // if using JWT
      }
    })
    .then(res => res.json())
    .then(data => setProfile(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <StudentNavbar />
      <h2>Student Profile</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      {/* Add more fields as per your model */}
    </div>
  );
};

export default StudentProfile;
