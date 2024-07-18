import React from 'react'
import EditTaskBtn from './EditTaskBtn'
import DeleteTaskBtn from './DeleteTaskBtn'

const EditDeleteTask = (props) => {
  return (
    <>
        <div className="edit-delete-buttons d-flex">
            <EditTaskBtn toggleEditMode={props.toggleEditMode} editMode={props.editMode} />
            <DeleteTaskBtn deleteTask={props.deleteTask} />
        </div>
    </>
  )
}

export default EditDeleteTask
