import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from '../components/Register/RegisterPage';
import HomePage from "./../components/Home/Homepage"
import LoginPage from "./../components/Login/LoginPage"
import AdminPage from "./../components/Admin/AdminPage"
import CreatePizza from "./../components/Admin/Createpizza/CreatePizza"
import AdminLogin from "./../components/Admin/AdminLogin"
import CustomPizza from "./../components/CustomPizza/CustomPizza"
import DetailPizza from "./../components/DetailPizza/DetailPizza"
import PlaceOrder from "./../components/PlaceOrder/PlaceOrder"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/detailpizza/:id" element={<DetailPizza />} />
        <Route path="/custompizza" element={<CustomPizza />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/createpizzaadmin" element={<CreatePizza />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
