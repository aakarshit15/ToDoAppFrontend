import React from 'react'
import Task from './Task'
import EditDeleteTask from './EditDeleteTask';

const TaskListItem = (props) => {
  
  return (
    <>
        <div className="container-md w-100">
            <div className="tasks d-flex justify-content-between p-2">
                <Task task={props.task} renderBtns={props.renderBtns} />
                {props.renderBtns && <EditDeleteTask />}
            </div>
        </div>
    </>
  );
}

export default TaskListItem
