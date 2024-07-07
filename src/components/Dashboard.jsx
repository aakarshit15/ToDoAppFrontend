import React from 'react'

const Dashboard = (props) => {
  return (
    <>
        <h1 className={`${props.mode === "dark" && "darkMode"}`}>Hello {props.name}</h1>
    </>
  )
}

export default Dashboard
