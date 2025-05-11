import React, { useState } from 'react';
import axios from 'axios';

const AddFaculty = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const facultyData = { name, email, password, department, experience };
    try {
      const response = await axios.post('http://localhost:2007/admin/addfaculty', facultyData);
      alert('Faculty Added Successfully!');
      // Optionally clear the form
      setName('');
      setEmail('');
      setPassword('');
      setDepartment('');
      setExperience('');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Add Faculty');
    }
  };

  return (
    <div className="admin-form-container">
      <h2 className="form-heading">Add Faculty</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Department</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />

        <label>Experience (in years)</label>
        <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required />

        <button className="submit-btn" type="submit">Add Faculty</button>
      </form>

      {/* Inline CSS for styling */}
      <style jsx>{`
        .admin-form-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 25px;
          background-color: #f9f9f9;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .form-heading {
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
        }

        .admin-form label {
          margin: 10px 0 5px;
          font-weight: 600;
        }

        .admin-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .submit-btn {
          margin-top: 20px;
          padding: 12px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default AddFaculty;
