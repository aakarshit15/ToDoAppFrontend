import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Template from './Template'
import LandingPage from './LandingPage'

const UnAuthorizedRoute = (props) => {
  return (
  <>
        <Routes>
            <Route path="/" element={<><Template user={props.user} mode={props.mode} toggleMode={props.toggleMode} /></>}>
              <Route exact path="home" element={<LandingPage changeUser={props.changeUser} toggleSign={props.toggleSign} sign={props.sign} mode={props.mode} />} />
            </Route>
        </Routes>
  </>
  )
}

export default UnAuthorizedRoute
