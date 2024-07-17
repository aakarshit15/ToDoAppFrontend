import React from 'react'

const TaskListProgressBar = (props) => {
  return (
    <>
        <div className="progress-stacked w-25">
            <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={`width: ${(props.done)/(props.done + props.notDone) * 100}%`}>
                <div className="progress-bar bg-success">{props.done}</div>
            </div>
            <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={`width: ${(props.notDone)/(props.done + props.notDone) * 100}%`}>
                <div className="progress-bar bg-danger">{props.notDone}</div>
            </div>
        </div>
    </>
  )
}

export default TaskListProgressBar
