import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Template = (props) => {
  return (
    <>
        <Navbar changeUserLayout={props.changeUserLayout} user={props.user} mode={props.mode} toggleMode={props.toggleMode} />
        <Outlet />
    </>
  )
}

export default Template
