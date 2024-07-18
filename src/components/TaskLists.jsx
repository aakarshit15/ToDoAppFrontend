import React from 'react'
import TaskList from './TaskList'
import TaskListAbsent from './TaskListAbsent'

const TaskLists = (props) => {
  return (
    <>
        {
            props.allTasks.map((taskList, index) => {
                return (
                    ((props.startDate <= taskList.list_date) && (props.endDate >= taskList.list_date)) ?
                    <TaskList getAllTasks={props.getAllTasks} currentDate={props.currentDate} key={taskList.id} taskList={taskList} show={true} /> :
                    (index + 1) === props.allTasks.length && <><TaskListAbsent errMsg="No task list present for today" errSubMsg="Either create a task list or ENJOY🥳" /></>
                )
            })
        }
    </>
  )
}

export default TaskLists
