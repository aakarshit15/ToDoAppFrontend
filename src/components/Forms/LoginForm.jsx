import React, { useState } from 'react';
import axios from "axios";

const LoginForm = () => {

  const [formData, setFormData] = useState({username:"", password:""});

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/login", formData);
  }

  return (
    <div>
      <form>
        <div className="input-div" id="username-div">
            <label htmlFor="username" onChange={handleChange} value={formData.username} className="input-label" id="username-label">Username: </label>
            <input type="text" name="username" id="username" />
        </div>
        <div className="input-div" id="password-div">
            <label htmlFor="password" onChange={handleChange} value={formData.password} className="input-label" id="password-label">Password: </label>
            <input type="password" name="password" id="password" />
        </div>
        <div className="submit-div">
            <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
