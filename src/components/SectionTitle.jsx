import React from 'react'

const SectionTitle = (props) => {
  return (
    <h2 className={`pb-2 border-bottom ${props.mode === "dark" && "darkMode"}`}>{props.title}</h2>
  )
}

export default SectionTitle
