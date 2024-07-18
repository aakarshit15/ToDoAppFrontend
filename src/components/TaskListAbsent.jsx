import React from 'react'

const TaskListAbsent = (props) => {
  return (
    <>
        <h1>{props.errMsg}</h1>
        <h2>{props.errSubMsg}</h2>
    </>
  )
}

export default TaskListAbsent
