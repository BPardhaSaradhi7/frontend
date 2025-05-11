import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [branch, setBranch] = useState(''); // Branch field
  const [year, setYear] = useState(''); // Year field

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const studentData = {
      name,
      email,
      password,
      branch: branch || 'DefaultBranch', // Use the user-provided branch or a default value
      year: year || 'DefaultYear', // Use the user-provided year or a default value
    };

    try {
      const response = await axios.post('http://localhost:2007/api/students/register', studentData);
      alert('Student registered successfully');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Register Student');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: "url('background.png')" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <label><strong>Full Name :</strong></label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label><strong>Email :</strong></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label><strong>Date of Birth :</strong></label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <label><strong>Password :</strong></label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label><strong>Confirm Password :</strong></label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label><strong>Branch :</strong></label>
        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
        <label><strong>Year :</strong></label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button className="login-btn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupPage;
