import React from 'react'

const FormDescription = (props) => {
  return (
    <div className={`col-lg-7 text-center text-lg-start ${props.mode === "dark" && "darkMode"}`}>
        <h1 className="display-4 fw-bold lh-1 mb-3">Start using the app today</h1>
        <p className="col-lg-10 fs-4">Sign up for our "To-Do App" for free and transform your productivity effortlessly. Organize tasks efficiently, and collaborate seamlessly. Stay on top of deadlines and achieve more with ease.</p>
    </div>
  );
}

export default FormDescription;
