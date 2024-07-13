import React, { useState } from 'react';
import './LoginPage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { username, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          {/* Add your logo here */}
          <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
          <p>BUDGETBUDDY</p>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
            <label style={{color:"black" ,margin: '4rem'}}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            </div>
            <a href="#forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link" style={{color:"black"}}>
          Don't have an account? <a href="/Signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;