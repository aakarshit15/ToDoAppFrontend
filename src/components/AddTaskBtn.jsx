import React from 'react'

const AddTaskBtn = (props) => {
  return (
    props.renderBtns && 
    <>
        <div className="container-xxl px-3 addTaskBtn list-group-item d-flex justify-content-center my-2" style="gap: 10px;">
            <input className="form-control me-1" type="text" placeholder="Eg: Buy Groceries" aria-label="default input example" />
            <span className="align-self-center">00/15</span>
            <button title="Add Task" className="btn btn-primary ms-1 rounded-circle d-flex justify-content-center align-items-center my-auto"><b>+</b></button>
        </div>
    </>
    );
}

export default AddTaskBtn
