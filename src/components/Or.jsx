import React from 'react'

const Or = (props) => {
  return (
    <>
        <div className={`h5 d-flex justify-content-center align-items-center m-0 ${props.mode === "dark" && "text-white"}`}>
            OR
        </div> 
    </>
  )
}

export default Or
