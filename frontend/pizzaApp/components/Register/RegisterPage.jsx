import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/');
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="register_label">
          Full name
        </label>
        <input className="register_input" value={name} name='name' id="name" placeholder='Enter full name' type="text" />
        <label htmlFor="email" className="register_label">
          Email
        </label>
        <input
          className="register_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
        />
        <label htmlFor="password" className="register_label">
          Password
        </label>
        <div className={`password-field ${showPassword ? 'show-pass' : ''}`}>
          <input
            className="register_input"
            type={showPassword ? 'text' : 'password'}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Your password"
          />
          <span
            className="toggle-password"
            data-showpass=""
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <button type="submit" className="res_button">
          Register
        </button>
      </form>
      <button className="register-button" onClick={handleRegisterClick}>
        Already have an account? Login here
      </button>

    </div>
  );
};

export default LoginPage;
