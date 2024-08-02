import React, { useEffect, useState } from 'react'

const TaskListsTitle = (props) => {

  const mainTitle = (data, diff) => {
    return data.theme === "days" ?
    `${diff.dir} ${data.days} days (From ${props.getDateDiff(diff.len > 0 ? diff.len : diff.len * data.days).split("-").reverse().join("-")} To ${props.getDateDiff(diff.len > 0 ? data.days * diff.len : diff.len).split("-").reverse().join("-")})`  :
    `From ${data.from.split("-").reverse().join("-")} To ${data.to.split("-").reverse().join("-")}`
  }

  return (
    <>
        <div className={`container-md h5 mt-3 opacity-75 ${props.mode === "dark" && "text-white"}`}>
            {mainTitle(props.currentTaskLists, props.diff)}
        </div>
    </>
  )
}

export default TaskListsTitle
