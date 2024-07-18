import React from 'react'
import TaskLists from './TaskLists'
import DashboardSectTitle from './DashboardSectTitle'

const TodaysTasks = (props) => {
  return (
    <>
        <DashboardSectTitle title="Today's Task" />
        <TaskLists startDate={props.currentDate} getAllTasks={props.getAllTasks} endDate={props.currentDate} currentDate={props.currentDate} allTasks={props.allTasks} />
    </>
  )
}

export default TodaysTasks
