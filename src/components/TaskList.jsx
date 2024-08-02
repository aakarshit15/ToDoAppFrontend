import React from 'react'
import TaskListItems from './TaskListItems'
import TaskListHeader from './TaskListHeader'

const TaskList = (props) => {

  return (
    <>
      <div className="container-md my-4">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className={`accordion-item bg-${props.mode}`}>
            <TaskListHeader mode={props.mode} taskList={props.taskList} show={props.show} />
            <div id={`panelsStayOpen-collapse${props.taskList.id}`} className={`accordion-collapse collapse ${props.show && "show"}`} aria-labelledby="panelsStayOpen-headingOne">
              <TaskListItems mode={props.mode} getAllTasks={props.getAllTasks} currentDate={props.currentDate} taskList={props.taskList} />
            </div>      
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList
