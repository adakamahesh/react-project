import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Cookies from 'js-cookie';


function App() {
  // const getInitialAuthState = () => {
  //   const logged = Cookies.get('isLogged');
  //   try {
  //     return logged ? JSON.parse(logged) : false;
  //   } catch (e) {
  //     console.error("Error parsing 'isLogged' cookie:", e);
  //     return false;
  //   }
  // };

  // const [isAuthenticated, setIsAuthenticated] = useState(getInitialAuthState); // Track login state

  // useEffect(() => {
  //   const logged = Cookies.get('isLogged');
  //   if (logged !== String(isAuthenticated)) {
  //     setIsAuthenticated(logged ? JSON.parse(logged) : false);
  //   }
  // }, [isAuthenticated]); 
  return (
    <>
      <Routes>
        {/* Only allow access to Home if the user is authenticated */}
        <Route path="/" element={<Home />} />
        {/* Allow login and registration pages to be accessed freely */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protect the profile page as well */}
        <Route path="/profile" element={ <Profile />} />
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;