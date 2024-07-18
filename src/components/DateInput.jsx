import React from 'react'

const DateInput = (props) => {
  return (
    <>
        <div className="date-input-div d-flex align-items-center h5 m-0">
            <label className="align-self-center m-0 mx-3" htmlFor="date">{props.label}: </label>
            <input className="form-control rounded p-1" type="date" min={props.min} max={props.max} name={props.name} />
        </div>
    </>
  )
}

export default DateInput
