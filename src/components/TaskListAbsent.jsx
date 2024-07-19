import React from 'react'

const TaskListAbsent = (props) => {
  return (
    <>
      <div className="container-md d-flex justify-content-center flex-column align-items-center my-4">
        <h1>{props.errMsg}</h1>
        <h2>{props.errSubMsg}</h2>
      </div>
    </>
  )
}

export default TaskListAbsent
