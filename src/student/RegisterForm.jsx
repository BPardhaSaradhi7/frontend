import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3030/api/students/register', student);
      alert('Registered successfully!');
      setStudent({ name: '', email: '', password: '' });
    } catch (error) {
      alert('Registration failed!');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Register as Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={student.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
