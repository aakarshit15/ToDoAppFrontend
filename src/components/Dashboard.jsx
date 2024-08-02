import axios from 'axios'
import React from 'react'
import TodaysTasks from './TodaysTasks';
import TaskListForm from './TaskListForm';
import OtherTaskLists from './OtherTaskLists';

const Dashboard = (props) => {

  const handleLogOut = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/logout');
    props.changeUser(response.data);
  }

  return (
    <>
      <TodaysTasks currentDate={props.currentDate} allTasks={props.allTasks} getAllTasks={props.getAllTasks} mode={props.mode} />
      <TaskListForm mode={props.mode} currentDate={props.currentDate} getAllTasks={props.getAllTasks} />
      <OtherTaskLists mode={props.mode} other="upcoming" currentDate={props.currentDate} getAllTasks={props.getAllTasks} allTasks={props.allTasks} getDateDiff={props.getDateDiff} />
      <OtherTaskLists mode={props.mode} other="previous" currentDate={props.currentDate} getAllTasks={props.getAllTasks} allTasks={props.allTasks} getDateDiff={props.getDateDiff} />
    </>
  )
}

export default Dashboard
