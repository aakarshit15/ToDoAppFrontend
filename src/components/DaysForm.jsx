import React, { useEffect } from 'react'

const DaysForm = (props) => {
  return (
    <>
        <div className="m-0 h5 d-flex align-items-center justify-content-between">
            {props.other === "upcoming" ? "Next" : "Last"} <input type="number" style={{width: "50px"}} max="30" min="0" className="mx-2" value={props.taskListFormData.days} onChange={(event) => {props.changeTaskListFormData(event)}}  name="days" /> days
        </div>
    </>
  )
}

export default DaysForm
