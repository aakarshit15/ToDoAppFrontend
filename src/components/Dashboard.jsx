import axios from 'axios'
import React from 'react'

const Dashboard = (props) => {

  const handleLogOut = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/logout');
    props.changeUser(response.data);
  }

  return (
    <>
        <h1 className={`${props.mode === "dark" && "darkMode"}`}>Hello {props.user.name}</h1>
        <button onClick={handleLogOut}>Log out</button>
    </>
  )
}

export default Dashboard
