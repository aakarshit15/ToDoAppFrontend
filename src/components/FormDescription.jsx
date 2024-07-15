import React from 'react'

const FormDescription = (props) => {
  return (
    <div className={`col-lg-7 text-center text-lg-start ${props.mode === "dark" && "darkMode"}`}>
        <h1 className="display-4 fw-bold lh-1 mb-3">Start using the app today</h1>
        <p className="col-lg-10 fs-4">Discover the ultimate productivity boost with our To Do App! Streamline your tasks, set reminders, and prioritize your day effortlessly. With customizable features tailored to your needs, achieving your goals has never been easier. Sign up now and transform the way you manage your tasks, making every day more productive!</p>
    </div>
  );
}

export default FormDescription;
