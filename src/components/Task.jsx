import React from 'react'

const Task = (props) => {
  return (
    <>
        <label className="list-group-item flex-grow-1 align-self-center h6 m-0">
            <input className={`form-check-input mt-1 ${!props.renderBtns && "d-none"}`} type="checkbox" value="" defaultChecked={props.done} />
            <span className={props.task.done && "text-decoration-line-through"}>{props.task.task}</span>
        </label>
    </>
  )
}

export default Task
