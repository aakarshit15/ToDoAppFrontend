import React from 'react'
import DateInput from './DateInput'

const TaskListForm = (props) => {
  return (
    <>
        <div className="container-md my-5 d-flex flex-column align-items-center">
            <DateInput label="Date" name="list_date" min={props.currentDate} />
            <button type="submit" className="btn btn-primary mt-2"> + Create Task List</button>
        </div>
    </>
  )
}

export default TaskListForm
