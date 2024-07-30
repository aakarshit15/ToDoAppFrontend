import React from 'react'
import DaysForm from './DaysForm'
import DateForm from './DateForm'
import ShowTasksBtn from './ShowTasksBtn'
import Or from './Or'

const OtherTaskListsForm = (props) => {
  return (
  <>
    <div className="my-3 container-md d-flex flex-column flex-md-row justify-content-between align-items-center" style={{gap:"20px"}}>
        <DaysForm taskListFormData={props.taskListFormData} changeTaskListFormData={props.changeTaskListFormData} other={props.other} />
        <Or />
        <DateForm other={props.other} currentDate={props.currentDate} getDateDiff={props.getDateDiff} taskListFormData={props.taskListFormData} changeTaskListFormData={props.changeTaskListFormData} changeCurrentTaskLists={props.changeCurrentTaskLists} setTaskListFormData={props.setTaskListFormData} />
        <ShowTasksBtn taskListFormData={props.taskListFormData} changeCurrentTaskLists={props.changeCurrentTaskLists} />
    </div>
  </>
  )
}

export default OtherTaskListsForm
