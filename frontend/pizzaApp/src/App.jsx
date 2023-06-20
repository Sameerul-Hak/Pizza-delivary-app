import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from '../screens/Register/RegisterPage';
import HomePage from '../screens/Home/Homepage';
import LoginPage from '../screens/Login/LoginPage';
import AdminPage from "./../components/Admin/AdminPage"
import CreatePizza from "./../components/Admin/Createpizza/CreatePizza"
import AdminLogin from "./../components/Admin/AdminLogin"
import CustomPizza from "../screens/CustomPizza/CustomPizza"
import DetailPizza from "./../components/DetailPizza/DetailPizza"
import PlaceOrder from "./../components/PlaceOrder/PlaceOrder"
import Menu from "../screens/Menu/Menu"
import Cart from '../screens/Cart/Cart';
import EditPizzaForm from '../components/DetailPizza/EditPizza';
import PizzaDetails from '../screens/PizzaDetails/PizzaDetails';
import { AdminAuthProvider } from './../components/Admin/AdminAuthContext';
import PrivateRoutes from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <AdminAuthProvider>
        <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detailpizza/:id" element={<DetailPizza />} />
          {/* <Route path="/detailP/:id" element={<DetailP />} /> */}
          <Route path="/custompizza" element={<CustomPizza />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/createpizzaadmin" element={<CreatePizza />} />
          <Route path="/edit-pizza/:id" element={<EditPizzaForm />} />
          <Route path="/singlepizza/:id" element={<PizzaDetails />} />
        </Routes>
      </AdminAuthProvider>
    </Router>
  );
};

export default App;
