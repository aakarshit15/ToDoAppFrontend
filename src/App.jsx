import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import axios from 'axios';

function App() {

  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(false);

  const toggleMode = (event) => {
    setMode(mode === "light" ? "dark" : "light");
    event.preventDefault();
  }

  const mainRender = (user) => {
    if(user.isAuthenticated) {
      return (<><Dashboard mode={mode} name={user.name} /></>);
    } else {
      return (<><LandingPage mode={mode} /></>);
    }
  }

  useEffect(() => {
    async () => {
      const response = await axios.get('/api/dashboard');
      setUser(response.data);
    }
  });

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
