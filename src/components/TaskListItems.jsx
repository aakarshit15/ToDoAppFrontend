import React from 'react'
import TaskListItem from './TaskListItem';
import AddTaskBtn from './AddTaskBtn';

const TaskListItems = (props) => {

  const renderBtns = () => {
    return (props.taskList.list_date >= props.currentDate);
  }

  return (
    <>
        {
            props.taskList.tasks.map((task) => {
              return (<TaskListItem getAllTasks={props.getAllTasks} key={task.id} task={task} renderBtns={renderBtns()} />)
            })
        }
        <AddTaskBtn id={props.taskList.id} getAllTasks={props.getAllTasks} renderBtns={renderBtns()} />
    </>
  );
}

export default TaskListItems
