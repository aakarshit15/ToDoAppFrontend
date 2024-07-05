import React from 'react'

const FormInputMessage = (props) => {
  return (
    <>
        <div className={`mx-2 ${props.mode === "dark" ? "darkMode" : "text-muted"}`}>{props.msg}</div>
    </>
  )
}

export default FormInputMessage
