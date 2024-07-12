import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import axios from 'axios';
import './App.css';
import Workspace from './components/Workspace.jsx';
import AuthorizedRoute from './components/AuthorizedRoute.jsx';
import UnAuthorizedRoute from './components/UnAuthorizedRoute.jsx';
import { Router, useNavigate, Navigate } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(false);
  const [sign, setSign] = useState("up");
  const [userLayout, setUserLayout] = useState("dashboard");

  const toggleSign = () => {
    setSign(sign === "up" ? "in" : "up");
  }

  const toggleMode = (event) => {
    setMode(mode === "light" ? "dark" : "light");
    event.preventDefault();
  }

  const changeUserLayout = (newUserLayout) => {
    setUserLayout(newUserLayout);
  }

  const changeUser = (newUser) => {
    setUser(newUser);    
  }

  const mainRender = (user) => {
    if(user && user.isAuthenticated) {
      return (<><AuthorizedRoute changeUserLayout={changeUserLayout} mode={mode} toggleMode={toggleMode} user={user} changeUser={changeUser} sign={sign} toggleSign={toggleSign} /><Navigate to={`/user/${userLayout}`} replace /></>);
    } else {
      return (<><UnAuthorizedRoute mode={mode} toggleMode={toggleMode} user={user} changeUser={changeUser} sign={sign} toggleSign={toggleSign} /><Navigate to="/home" replace /></>);
    }
  }

  useEffect(() => {

    const getDashboard = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setUser(response.data);
      } catch (err) {
        console.error("Error sending post login request", err);
      }
    }

    getDashboard();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = (mode==="dark" ? "black" : null);
  }, [mode]);

  return (
    <>
      {mainRender(user)}
    </>
  )
}

export default App
