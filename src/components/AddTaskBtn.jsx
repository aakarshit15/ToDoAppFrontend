import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddTaskBtn = (props) => {

  const [addTaskFormData, setAddTaskFormData] = useState({task_list_id: props.id, title: ""});
  const [disable, setDisable] = useState(true);
  const [titleLength, setTitleLength] = useState(0);

  const handleChange = (event) => {
    setAddTaskFormData({...addTaskFormData, [event.target.name]: event.target.value});
  }

  const addTask = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/addTask", addTaskFormData);
    if(response.data.taskSuccess) {
        props.getAllTasks();
        setAddTaskFormData({task_list_id: props.id, title: ""});
    }
  }

  useEffect(() => {
    setTitleLength(addTaskFormData.title.length);
    addTaskFormData.title === "" || addTaskFormData.title.length > 15 ? setDisable(true) : setDisable(false);
  }, [addTaskFormData]);

  return (
    props.renderBtns && 
    <>
        <form className="container-xxl px-3 addTaskBtn list-group-item d-flex justify-content-center my-2" style={{gap: "10px"}}>
            <input className="form-control me-1" value={addTaskFormData.title} name="title" onChange={(event) => {handleChange(event)}} type="text" placeholder="Eg: Buy Groceries" aria-label="default input example" required />
            <span className="align-self-center">{titleLength}/15</span>
            <button onClick={disable ? null : addTask} title="Add Task" className={`btn btn-primary ms-1 rounded-circle d-flex justify-content-center align-items-center my-auto ${disable && "opacity-25"}`}><b>+</b></button>
        </form>
    </>
    );
}

export default AddTaskBtn
