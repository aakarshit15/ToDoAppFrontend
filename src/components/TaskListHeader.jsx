import React from 'react'
import TaskListDate from './TaskListDate'
import TaskListProgressBar from './TaskListProgressBar'

const TaskListHeader = (props) => {
  return (
    <>
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <TaskListDate date={props.date} />
                <TaskListProgressBar done={props.done} notDone={props.notDone} />
            </button>
        </h2>
    </>
  )
}

export default TaskListHeader
