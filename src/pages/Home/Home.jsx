// import React from 'react'
import { useEffect } from "react";

import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import './home.css';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";



export default function Home() {
  const navigate = useNavigate();

  const getInitialAuthState = () => {
    const logged = Cookies.get("isLogged");
    try {
      return logged ? JSON.parse(logged) : false;
    } catch (e) {
      console.error("Error parsing 'isLogged' cookie:", e);
      return false;
    }
  };

  useEffect(() => {
    const isLogged = getInitialAuthState();
    if (!isLogged) navigate('/login');
    debugger;
  }, []);
  return (
    <>
     <Topbar/>
     <div className='homeContainer'>
       <Sidebar/>
       <Feed/>
       <Rightbar/>
     </div>
    </>
  )
}
