import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Analysis from './Analysis';
import Profile from './Profile';
import LandingPage from './LandingPage';
import Template from './Template';

const AuthorizedRoute = (props) => {
  return (
    <>
          <Routes>
              <Route path="/user/" element={<Template changeUserLayout={props.changeUserLayout} user={props.user} mode={props.mode} toggleMode={props.toggleMode} />}>
                <Route exact path="dashboard" element={<Dashboard changeUser={props.changeUser} mode={props.mode} user={props.user} />} />
                <Route exact path="analysis" element={<Analysis mode={props.mode} user={props.user} />} />
                <Route exact path="profile" element={<Profile mode={props.mode} user={props.user} changeUser={props.changeUser} />} />
              </Route>
          </Routes>
    </>
  );
}

export default AuthorizedRoute
