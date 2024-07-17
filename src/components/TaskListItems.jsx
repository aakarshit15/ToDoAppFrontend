import React from 'react'
import TaskListItem from './TaskListItem';
import AddTaskBtn from './AddTaskBtn';

const TaskListItems = (props) => {

  const renderBtns = () => {
    return (props.date >= props.currentDate);
  }

  return (
    <>
        {
            taskList.map((task) => {
                <TaskListItem task={task} renderBtns={renderBtns()} />
            })
        }
        <AddTaskBtn renderBtns={renderBtns()} />
    </>
  );
}

export default TaskListItems
