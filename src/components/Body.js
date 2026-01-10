import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
<<<<<<< HEAD
  <div className=' grid grid-flow-col'>
=======
  <div className=' grid grid-flow-col -z-10'>
>>>>>>> 114c00d (Inicial commit after brach rename)
       <SideBar/>
       <Outlet/>
   </div>
  )
}

export default Body