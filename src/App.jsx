import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import axios from 'axios';
import './App.css';

function App() {

  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(false);
  const [sign, setSign] = useState("up");

  const toggleSign = () => {
    setSign(sign === "up" ? "in" : "up");
  }

  const toggleMode = (event) => {
    setMode(mode === "light" ? "dark" : "light");
    event.preventDefault();
  }

  const changeUser = (newUser) => {
    setUser(newUser);    
  }

  const changeUsernameChecks = (newUsernameErr) => {
    setUsernameChecks(newUsernameErr);
  }

  const mainRender = (user) => {
    if(user.isAuthenticated) {
      return (<><Dashboard mode={mode} name={user.name} changeUser={changeUser} /></>);
    } else {
      return (<><LandingPage changeUser={changeUser} toggleSign={toggleSign} sign={sign} mode={mode} /></>);
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
      <Navbar mode={mode} toggleMode={toggleMode} />
      {mainRender(user)}
    </>
  )
}

export default App
