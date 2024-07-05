import React from 'react';
import img1 from '../assets/registrationPageImage.jpg';

const Header = (props) => {
  return (
    <div className="header-section container col-xxl-8 px-4 py-2">
        <div className="header-div row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={img1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className={`display-5 fw-bold lh-1 mb-3 ${props.mode === "dark" && "darkMode"}`}>Organize your work, Organize your life</h1>
            <p className={`lead ${props.mode === "dark" && "darkMode"}`}>Plan, Execute and Review Regularly. Organize your work to bring order to your life. Create schedules, declutter spaces, and set priorities. Effective organization reduces stress, enhances productivity, and fosters a balanced, fulfilling lifestyle.</p>
          </div>
        </div>
    </div>
  )
}

export default Header
