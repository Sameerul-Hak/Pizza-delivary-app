import React from 'react';
import './loginPage.css';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="login-page">
      <div className="container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
