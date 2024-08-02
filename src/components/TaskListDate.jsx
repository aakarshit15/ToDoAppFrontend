import React from 'react'

const TaskListDate = (props) => {
  return (
    <>
        <h5 className={`m-0 me-5 ${props.mode === "dark" && "text-white"}`}>{props.date}</h5>
    </>
  )
}

export default TaskListDate
