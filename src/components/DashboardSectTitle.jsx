import React from 'react'

const DashboardSectTitle = (props) => {
  return (
    <>
        <div className={`container-md h4 mt-4 text-decoration-underline ${props.mode === "dark" && "text-white"}`}>
            {props.title}
        </div>
    </>
  );
}

export default DashboardSectTitle
