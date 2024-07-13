import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './LoginPage.jsx';
import Signup from './SignupPage.jsx';
// Import other components as needed

const Home = () => (
  <div>
    <h1>Welcome to the Budgeting App</h1>
    <Link to="/login">Go to Login</Link>
    <br />
    <Link to="/signup">Go to Signup</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
