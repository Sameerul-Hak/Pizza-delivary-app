import React, { useState } from 'react';
import './adminlogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log(formData); // You can modify this to save the data to a database or perform any other actions
  };

  return (
    <div className='form-container'>
    <div className="form-admin">
      <div className="form-inner-admin">
        <h2 className='admin-text'>Admin Login</h2>
        <div className="input-wrapper">
          <label>Email:</label>
          <div className="input-group">
            {/* <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19.28 6.05C17.82 4.8 15.96 4 13.95 4H10c-1.65 0-3 1.35-3 3v2H4c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1h-3V7c0-.82.66-1.45 1.28-1.95zM14 11v2h-4v-2H8v2H6v-2H4v4h16v-4h-2v2h-2v-2h-2zm4-3h-1.5V7h1.5v1zm0 4h-1.5v-2h1.5v2z" />
                </svg>
              </span> */}
              <img className="icon-admin" src='./../icons/email.png'/>
            <input className='input-admin'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label>Password:</label>
          <div className="input-group">
            <img className="icon-admin" src='./../icons/password.png'/>
            <input
            className='input-admin'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="btn-group">
          <button className="btn btn--primary login-form-admin" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
