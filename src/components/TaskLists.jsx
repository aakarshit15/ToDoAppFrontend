import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import TaskListAbsent from './TaskListAbsent'

const TaskLists = (props) => {

  const [requiredTaskLists, setRequiredTaskLists] = useState([]);

  const changeRequiredTaskLists = () => {
    let newTaskList = [];
    for(let i=0; i<props.allTasks.length; i++) {
      if(props.startDate <= props.allTasks[i].list_date && props.endDate >= props.allTasks[i].list_date) {
        newTaskList.push(props.allTasks[i]);
      }
    }
    setRequiredTaskLists(newTaskList);
  }
  
  useEffect(() => {
    changeRequiredTaskLists();
  }, [props.allTasks]);

  return (
    <>
      {
        requiredTaskLists.length !== 0 ? 
        <>
          {
            requiredTaskLists.map((taskList) => {
              return (<TaskList getAllTasks={props.getAllTasks} currentDate={props.currentDate} key={taskList.id} taskList={taskList} show={props.show} />)
            })
          }
        </> : 
        <>
          <TaskListAbsent errMsg={props.errMsg} errSubMsg={props.errSubMsg} />
        </>
      }
    </>
  )
}

export default TaskLists
