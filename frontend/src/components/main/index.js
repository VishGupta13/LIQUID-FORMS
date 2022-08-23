import React from 'react'
import {Outlet} from 'react-router-dom'


const Main = () => {
  return (
    <div>
       {/* HEDER */}
        <Outlet />
    </div>
  )
}

export default Main;