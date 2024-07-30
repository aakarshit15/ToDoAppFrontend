import React, { useEffect, useState } from 'react'

const ShowTasksBtn = (props) => {

  const [disable, setDisable] = useState(false)

  useEffect(() => {
    const data = props.taskListFormData
    data.from > data.to ? setDisable(true) : setDisable(false)
  }, [props.taskListFormData]);

  return (
    <>
        <div className="d-flex">
          <button className={`btn btn-primary mx-4 ${disable && "opacity-25"}`} onClick={!disable ? ((event) => {props.changeCurrentTaskLists(event)}) : null} style={{minWidth:"100px"}}>Show Tasks</button>
        </div>
    </>
  )
}

export default ShowTasksBtn
