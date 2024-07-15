import React from 'react'
import FormInputMessage from './FormInputMessage'

const Input = (props) => {
  const myStyle = {
    color: props.mode === "dark" ? "white" : null
  }
  return (
    <div className={`form-floating mb-3 ${props.mode === "dark" && "darkMode"}`}>
        <input style={myStyle} value={props.inputValue} onChange={(event) => {props.changeFormData(event)}} type={props.type} className={`form-control ${props.mode === "dark" && "bg-dark darkMode"}`} name={props.name} id={props.id} placeholder="name@example.com" />
        <label htmlFor={props.id}>{props.label}</label>
        <FormInputMessage err={props.err} mode={props.mode} msg={props.msg} />
    </div>
  )
}

export default Input
