import React from 'react'
import NavLinkList from './NavLinkList'
import ModeToggler from './ModeToggler'

const AuthNavComps = (props) => {
  return (
    <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLinkList changeUserLayout={props.changeUserLayout} link="Dashboard" />
                {/* <NavLinkList changeUserLayout={props.changeUserLayout} link="Analysis" /> */}
                <NavLinkList changeUserLayout={props.changeUserLayout} link="Profile" />
            </ul>
            <ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
        </div>
    </>
  )
}

export default AuthNavComps
