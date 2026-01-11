import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
  <div className=' grid grid-flow-col -z-10'>
       <SideBar/>
       <Outlet/>
   </div>
  )
}

export default Body