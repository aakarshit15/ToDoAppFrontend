import React from 'react'
import TaskLists from './TaskLists'
import DashboardSectTitle from './DashboardSectTitle'

const UpcomingTasks = (props) => {
  return (
    <>
        <DashboardSectTitle title="Upcoming tasks" />
        <TaskLists errMsg="No Upcoming tasks present" errSubMsg="Plan ahead of time and create a task list" currentDate={props.currentDate} getAllTasks={props.getAllTasks} startDate={props.getDateDiff(1)} endDate={props.getDateDiff(5)} allTasks={props.allTasks} show={false} />
    </>
  )
}

export default UpcomingTasks
