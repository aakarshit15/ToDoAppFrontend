import React, { useEffect, useState } from 'react'
import DateInput from './DateInput'
import axios from 'axios';

const TaskListForm = (props) => {

  const [disable, setDisbale] = useState(true);
  const [taskListFormData, setTaskListFormData] = useState({list_date: ""});

  const changeTaskListFormData = (event) => {
    setTaskListFormData({...taskListFormData, [event.target.name]: event.target.value});
  }

  const addTaskList = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/addTaskList", taskListFormData);
    if(response.data.taskListSuccess) {
      props.getAllTasks();
      setTaskListFormData({list_date: ""});
    }
  }

  useEffect(() => {
    taskListFormData.list_date === "" ? setDisbale(true) : setDisbale(false);
  }, [taskListFormData]);
 
  return (
    <>
        <form className="container-md my-5 d-flex flex-column align-items-center">
            <DateInput mode={props.mode} taskListFormData={taskListFormData} changeTaskListFormData={changeTaskListFormData} label="Date" name="list_date" min={props.currentDate} />
            <button type="submit" onClick={disable ? null : ((event) => {addTaskList(event)})} className={`btn btn-primary mt-2 ${disable && "opacity-75"}`}> + Create Task List</button>
        </form>
    </>
  )
}

export default TaskListForm
