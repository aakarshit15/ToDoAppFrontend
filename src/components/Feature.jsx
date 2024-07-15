import React from 'react'
import FeatureSVG from './FeatureSVG';

const Feature = (props) => {

  return (
    <div className="col d-flex align-items-start">
        <div className={`icon-square bg-light text-dark flex-shrink-0 me-3 mt-2 ${props.mode === "dark" && "btn-dark"}`}>
          <FeatureSVG mode={props.mode} title={props.title} />
        </div>
        <div>
          <h2 className={`${props.mode === "dark" && "darkMode"}`}>{props.title}</h2>
          <p className={`${props.mode === "dark" && "darkMode"}`}>{props.description}</p>
        </div>
    </div>
  );
}

export default Feature;
