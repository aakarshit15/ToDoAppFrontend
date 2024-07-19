import React, { useEffect } from 'react'

const DateInput = (props) => {

  // useEffect(() => {
  //   console.log(props.min);
  // }, []);

  return (
    <>
        <div className="date-input-div d-flex align-items-center h5 m-0">
            <label className="align-self-center m-0 mx-3" htmlFor="list_date">{props.label}: </label>
            <input id="list_date" value={props.taskListFormData.list_date} onChange={(event) => {props.changeTaskListFormData(event)}} className="form-control rounded p-1" type="date" min="2024-07-19" max={props.max} name={props.name} required />
        </div>
    </>
  )
}

export default DateInput