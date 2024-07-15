import React from 'react'

const Profile = (props) => {
  return (
    <>
      <h1 className={`${props.mode === "dark" && "darkMode"}`}>This is Profile</h1>
    </>
  )
}

export default Profile
