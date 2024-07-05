import React from 'react'

const Review = (props) => {
  return (
    <div className={`col-lg-4 ${props.mode === "dark" && "darkMode"}`}>
              
               <img src={props.imgSrc} alt={props.name + " Profile Picture"} width="140" height="140" className="rounded-circle" />
               <h2>{props.name}</h2>
               <p><i><q>{props.review}</q></i></p>
              
    </div>
  )
}

export default Review
