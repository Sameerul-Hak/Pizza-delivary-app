import React, { useState } from 'react';
import './adminlogin.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const history=useNavigate();
  const [formDatas, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setmessage]=useState("")

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/admin/login", {
        email: formDatas.email,
        password: formDatas.password,
      });

      const data = res.data;
      if (res.data.message ==="Login success") {
        setmessage("Login Sucess")
        history("/admin"); 
      } else if(res.data.message==="User not found, please sign up") {
        setmessage("User not found, please sign up")
        setTimeout(() => {
          setmessage(''); // Clear the message after 3 seconds
        }, 2000);
      }
       else if(res.data.message==="Invalid email or password") {
        setmessage("Invalid email or password")
        setTimeout(() => {
          setmessage(''); // Clear the message after 3 seconds
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form-container'>
      {message && (
              <div className="notification">
                <h3>{message}</h3>
              </div>
      )} 
      <div className="form-admin">
      <div className="form-inner-admin">
        
        <h2 className='admin-text'>Admin Login</h2>
        <div className="input-wrapper">
          <label>Email:</label>
          <div className="input-group">
              <img className="icon-admin" src='./../icons/email.png'/>
            <input className='input-admin'
              type="email"
              name="email"
              value={formDatas.email}
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
              value={formDatas.password}
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
