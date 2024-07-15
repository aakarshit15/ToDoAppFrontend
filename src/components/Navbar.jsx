import React from 'react';
import AuthNavComps from './AuthNavComps';
import ModeToggler from './ModeToggler';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.user && props.user.isAuthenticated ? props.user.name : "To-Do App"}</a>
          {props.user.isAuthenticated ? <AuthNavComps mode={props.mode} changeUserLayout={props.changeUserLayout} toggleMode={props.toggleMode} /> : <ModeToggler mode={props.mode} toggleMode={props.toggleMode} />}
        </div>
    </nav>
  );
}

export default Navbar;
