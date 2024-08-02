import React from 'react'

const Analysis = (props) => {
  return (
    <>
        <h1 className={`${props.mode === "dark" && "text-white"}`}>This is Analysis</h1>
    </>
  )
}

export default Analysis
