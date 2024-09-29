// import React from 'react'
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import './home.css';

export default function Home() {
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
