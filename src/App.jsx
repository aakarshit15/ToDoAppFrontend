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
  const [usernameChecks, setUsernameChecks] = useState(false);

  const toggleSign = () => {
    setSign(sign === "up" ? "in" : "up");
  }

  const toggleMode = (event) => {
    setMode(mode === "light" ? "dark" : "light");
    event.preventDefault();
  }

  const changeUser = async (newUser) => {
    console.log("User is changing");
    setUser(newUser);
    if(user) {
      const response = await axios.post('/api/register', user);
      console.log(response.data.registrationSuccessful);
      if(response.data.registrationSuccessful) {
        setUsernameChecks(false);
        toggleSign();
      } else {
        setUsernameChecks(true);
      }
    }
  }

  const mainRender = (user) => {
    if(user.isAuthenticated) {
      return (<><Dashboard mode={mode} name={user.name} /></>);
    } else {
      return (<><LandingPage changeUser={changeUser} usernameChecks={usernameChecks} toggleSign={toggleSign} sign={sign} mode={mode} /></>);
    }
  }

  useEffect(() => {
    async () => {
      const response = await axios.get('/api/dashboard');
      setUser(response.data);
    }
  });

  // async function registerPost() {
  //   if(user) {
  //     const response = await axios.post('/api/register', user);
  //     console.log(response.data.registrationSuccessful);
  //     if(response.data.registrationSuccessful) {
  //       setUsernameChecks(false);
  //       toggleSign();
  //     } else {
  //       setUsernameChecks(true);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   async () => {
  //     await registerPost()
  //   }
  // }, [user]);

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
