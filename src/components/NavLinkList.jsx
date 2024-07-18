import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkList = (props) => {
  return (
    <>
        <li className="nav-item">
            <NavLink onClick={() => {props.changeUserLayout(props.link.toLowerCase())}} className="nav-link" aria-current="page" exact="true" to={`/user/${props.link.toLowerCase()}`}>{props.link}</NavLink>
        </li>
    </>
  )
}

export default NavLinkList