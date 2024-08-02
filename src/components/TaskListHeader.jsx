import React from 'react'
import TaskListDate from './TaskListDate'
import TaskListProgressBar from './TaskListProgressBar'

const TaskListHeader = (props) => {

  const done = () => {
    let count=0;
    props.taskList.tasks.forEach((task) => {
      task.done && count++;
    });
    return count;
  } 

  return (
    <>
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className={`accordion-button ${!props.show && "collapsed"} ${props.mode === "dark" && "bg-dark accordion-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${props.taskList.id}`} aria-expanded={`${props.show}`} aria-controls="panelsStayOpen-collapseOne">
                <TaskListDate mode={props.mode} date={props.taskList.list_date.split("-").reverse().join("-")} />
                <TaskListProgressBar done={done()} notDone={props.taskList.tasks.length - done()} />
            </button>
        </h2>
    </>
  )
}

export default TaskListHeader
