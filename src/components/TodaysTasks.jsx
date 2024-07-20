import React from 'react'
import TaskLists from './TaskLists'
import DashboardSectTitle from './DashboardSectTitle'

const TodaysTasks = (props) => {
  return (
    <>
        <DashboardSectTitle title="Today's Task" />
        <TaskLists errMsg="No task list present for today" errSubMsg="Either create a task list or ENJOY🥳" startDate={props.currentDate} getAllTasks={props.getAllTasks} endDate={props.currentDate} currentDate={props.currentDate} allTasks={props.allTasks} show={true} />
    </>
  )
}

export default TodaysTasks
