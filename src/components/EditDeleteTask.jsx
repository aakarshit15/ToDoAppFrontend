import React from 'react'
import EditTaskBtn from './EditTaskBtn'
import DeleteTaskBtn from './DeleteTaskBtn'

const EditDeleteTask = () => {
  return (
    <>
        <div className="edit-delete-buttons">
            <EditTaskBtn />
            <DeleteTaskBtn />
        </div>
    </>
  )
}

export default EditDeleteTask
