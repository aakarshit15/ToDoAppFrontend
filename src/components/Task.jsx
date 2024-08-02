import axios from 'axios'
import React from 'react'

const Task = (props) => {

  const toggleDone = async () => {
    const response = await axios.patch("/api/toggleDone", props.task);
    if(response.data.toggleDoneSuccess) {
      props.getAllTasks();
    }
  }

  return (
    <>
        <label className="list-group-item flex-grow-1 align-self-center h5 m-0 task-input">
          <input onChange={() => {toggleDone()}} className={`form-check-input me-2 ${!props.renderBtns && "d-none"}`} type="checkbox" value="" defaultChecked={props.task.done} />
          <span className={`${props.task.done ? "text-decoration-line-through" : undefined} ${props.mode==="dark" && "text-white"} task-title`}>{props.task.title}</span>
        </label>
    </>
  )
}

export default Task
