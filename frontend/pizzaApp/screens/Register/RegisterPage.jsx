import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
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
    <div className='entry-contain'>
    <div className='register_container'>
    <div className='glass-card'>
    <div className="register">
      <form onSubmit={handleSubmit}>  
      <label htmlFor="name" className="log_label">
          Name
        </label>
        <input
          className="log_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Your Name"
        />
        <label htmlFor="email" className="log_label">
          Email
        </label>
        <input
          className="log_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
        />
        <label htmlFor="password" className="log_label">
          Password
        </label>
        <div className={`password-field ${showPassword ? 'show-pass' : ''}`}>
          <input
            className="log_input"
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
        <button type="submit" className="log_button">
          Register
        </button>
      </form>
      <button className="register-button" onClick={handleRegisterClick}>
        Already have an account? Login here
      </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;


