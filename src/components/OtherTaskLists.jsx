import React, { useState, useEffect } from 'react'
import OtherTaskListsForm from './OtherTaskListsForm'
import TaskListsTitle from './TaskListsTitle'
import TaskLists from './TaskLists'
import DashboardSectTitle from './DashboardSectTitle'

const OtherTaskLists = (props) => {

  const [diff, setDiff] = useState({})
  const [err, setErr] = useState({})

  useEffect(() => {
    setDiff(props.other === "upcoming" ? {dir: "Next", len:1} : {dir:"Last", len:-1})
    setErr(props.other === "upcoming" ? {errMsg: "No Upcoming tasks present", errSubMsg: "Plan ahead of time and create a task list"} : {errMsg: "No task list present", errSubMsg: "Try choosing a different time frame"})
  }, []);

  const [taskListFormData, setTaskListFormData] = useState({days:5, theme: "days", from:"", to:""})
  const [currentTaskLists, setCurrentTaskLists] = useState({days: 5, theme: "days", from:"", to:""})
  
  const changeTaskListFormData = (event) => {
    const newTheme = event.target.name === "days" ? "days" : "date"
    setTaskListFormData({...taskListFormData, theme: newTheme, [event.target.name]: event.target.value})
  }
  
  const changeCurrentTaskLists = (event) => {
    event.preventDefault()
    setCurrentTaskLists(taskListFormData)
  }

  return (
    <>
        <div className={`${props.other}-tasks my-5`}>
            <DashboardSectTitle mode={props.mode} title={`${props.other.charAt(0).toUpperCase() + props.other.slice(1)} Tasks`} />
            <OtherTaskListsForm mode={props.mode} other={props.other} taskListFormData={taskListFormData} changeTaskListFormData={changeTaskListFormData} changeCurrentTaskLists={changeCurrentTaskLists} currentDate={props.currentDate} getDateDiff={props.getDateDiff} setTaskListFormData={setTaskListFormData} />
            <TaskListsTitle mode={props.mode} diff={diff} getDateDiff={props.getDateDiff} other={props.other} currentTaskLists={currentTaskLists} />
            <TaskLists mode={props.mode} errMsg={err.errMsg} errSubMsg={err.errSubMsg} allTasks={props.allTasks} startDate={currentTaskLists.theme === "date" ? currentTaskLists.from : props.getDateDiff(diff.len > 0 ? diff.len : diff.len * currentTaskLists.days)} endDate={currentTaskLists.theme === "date" ? currentTaskLists.to : props.getDateDiff(diff.len > 0 ? currentTaskLists.days * diff.len :  diff.len)} getAllTasks={props.getAllTasks} currentDate={props.currentDate} show={false}  />
        </div>
    </>
  )
}

export default OtherTaskLists
