import React from 'react'
import FormInputMessage from './FormInputMessage'

const Input = (props) => {
  return (
    <div className={`form-floating mb-3 ${props.mode === "dark" && "darkMode"}`}>
        <input type={props.type} className={`form-control ${props.mode === "dark" && "bg-dark"}`} name={props.name} id={props.id} placeholder="name@example.com" />
        <label htmlFor={props.id}>{props.label}</label>
        <FormInputMessage mode={props.mode} msg={props.msg} />
    </div>
  )
}

export default Input