import React, { useState, useEffect } from 'react'
import EditTaskBtn from './EditTaskBtn'
import axios from 'axios';

const EditTaskForm = (props) => {

  const [editTaskFormData, setEditTaskFormData] = useState({id:props.task.id, title:props.task.title});
  const [disable, setDisable] = useState(false);

  const changeEditTaskFormData = (event) => {
    setEditTaskFormData({...editTaskFormData, [event.target.name]: event.target.value});
  }

  const editTask = async (event) => {
    event.preventDefault();
    const response = await axios.patch("/api/editTask", editTaskFormData);
    if(response.data.editTaskSuccess) {
        props.getAllTasks();
        props.toggleEditMode();
    }
  }

  useEffect(() => {
    (editTaskFormData.title === "" || editTaskFormData.title.length > 15) ? setDisable(true) : setDisable(false);
  }, [editTaskFormData]);

  return (
    <>
        <form className="container-xxl addTaskBtn list-group-item d-flex justify-content-center my-2" style={{gap: "10px"}}>
            <input onChange={(event) => {changeEditTaskFormData(event)}} className="form-control me-1" type="text" name="title" aria-label="default input example" value={editTaskFormData.title} autoFocus />
            <span className="align-self-center">{editTaskFormData.title.length}/15</span>
            <EditTaskBtn editTask={editTask} editMode={props.editMode} toggleMode={props.toggleEditMode} disable={disable} />
        </form>
    </>
  )
}

export default EditTaskForm
