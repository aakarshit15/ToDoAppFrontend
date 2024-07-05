import React from 'react';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">To-Do App</a>
          <form className="d-flex toggleMode">
            <button onClick={props.toggleMode} className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-circle-half" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
              </svg>
            </button>
          </form>
        </div>
    </nav>
  );
}

export default Navbar;
