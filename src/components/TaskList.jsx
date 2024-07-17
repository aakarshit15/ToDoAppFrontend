import React from 'react'
import TaskListItems from './TaskListItems'

const TaskList = (props) => {
  return (
    <>
        <div id={`panelsStayOpen-collapse${props.taskList.id}`} class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
           <TaskListItems taskList={props.taskList} />
        </div>
    </>
  )
}

export default TaskList
