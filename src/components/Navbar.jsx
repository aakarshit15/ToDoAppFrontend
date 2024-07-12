import React from 'react';
import AuthNavComps from './AuthNavComps';
import ModeToggler from './ModeToggler';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">To-Do App</a>
          {props.user.isAuthenticated ? <AuthNavComps changeUserLayout={props.changeUserLayout} toggleMode={props.toggleMode} /> : <ModeToggler toggleMode={props.toggleMode} />}
        </div>
    </nav>
  );
}

export default Navbar;
