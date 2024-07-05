import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  
    const [formData, setFormData] = useState({username:"", password:"", name: ""});

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
  
    // const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("/api/register", formData);
        if(response.data.registrationSuccessful) {
            // navigate("/");
        } else {
            navigate("/register");
        }
    }

    return (
        <form className='aleo-font-class'>
            <div className="input-div" id="username-div">
                <label htmlFor="username" onChange={handleChange} value={formData.username} className="input-label" id="username-label">Username: </label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="input-div" id="password-div">
                <label htmlFor="password" onChange={handleChange} value={formData.password} className="input-label" id="password-label">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="input-div" id="name-div">
                <label htmlFor="name" onChange={handleChange} value={formData.name} className="input-label" id="name-label">Name: </label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="submit-div">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    );
}

export default RegisterForm
