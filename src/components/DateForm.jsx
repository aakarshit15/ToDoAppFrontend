import React, { useEffect, useState } from 'react'
import DateInput from './DateInput'
import ShowTasksBtn from './ShowTasksBtn'

const DateForm = (props) => {

  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  useEffect(() => {
    setMin(props.other === "upcoming" && props.getDateDiff(1))
    setMax(props.other === "previous" && props.getDateDiff(-1))
  }, [min, max]);

  return (
    <>
      <div className="col-auto d-flex flex-column flex-md-row justify-content-center align-items-center m-0" style={{gap:"10px"}}>
        <DateInput mode={props.mode} label="From" name="from" min={props.other === "upcoming" ? min : undefined} max={props.other === "previous" ? max : undefined} taskListFormData={props.taskListFormData} changeTaskListFormData={props.changeTaskListFormData} />
        <DateInput mode={props.mode} label="To" name="to" min={props.taskListFormData.from !== "" ? props.taskListFormData.from : undefined} max={props.other === "previous" ? (max) : undefined} taskListFormData={props.taskListFormData} changeTaskListFormData={props.changeTaskListFormData} setTaskListFormData={props.setTaskListFormData} />
      </div>
    </>
  )
}

export default DateForm
