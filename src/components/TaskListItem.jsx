import React, { useState } from 'react'
import Task from './Task'
import EditDeleteTask from './EditDeleteTask';
import EditTaskForm from './EditTaskForm';
import axios from 'axios';

const TaskListItem = (props) => {

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const deleteTask = async () => {
    const response = await axios.delete(`/api/deleteTask/${props.task.id}`);
    if(response.data.deleteTaskSuccess) {
      props.getAllTasks();
    }
  }
  
  return (
    <>
        <div className="container-md w-100">
            <div className="tasks d-flex justify-content-between p-2">
                {editMode ? 
                  <>
                    <EditTaskForm getAllTasks={props.getAllTasks} task={props.task} editMode={editMode} toggleEditMode={toggleEditMode} />
                  </> 
                  : 
                  <>
                    <Task mode={props.mode} task={props.task} getAllTasks={props.getAllTasks} renderBtns={props.renderBtns} />
                    {props.renderBtns && <EditDeleteTask deleteTask={deleteTask} toggleEditMode={toggleEditMode} editMode={editMode} />}
                  </>}
            </div>
        </div>
    </>
  );
}

export default TaskListItem
