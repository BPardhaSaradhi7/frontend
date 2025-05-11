import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:2007/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', 'admin'); 
        navigate('/admin');
      } else {
        alert('Invalid admin credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: "url('/background.png')" }}>
      <form onSubmit={handleLogin} className="login-form">
        <h2>Welcome!<br /><span>Admin Login</span></h2>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">LOGIN</button>

        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password"><strong>Forgot Password?</strong></Link>
          <p>Don't have an account? <Link to="/signup"><strong>Register Here</strong></Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
