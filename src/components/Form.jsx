import React, { useEffect, useState } from 'react'
import Input from './Input'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Form = (props) => {

    const [formData, setFormData] = useState({name: "", email:"", username:"", password1:"", password2:"", password:""});
    const [usernameErr, setUsernameErr] = useState(false);

    const changeFormData = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const checkPasswords = () => {
        if(formData.password1 != formData.password2) {
            return true;
        }
    }

    const signUpFields = (sign) => {
        if(sign === "up") {
            return (
                <>
                    <Input inputValue={formData.name} changeFormData={changeFormData} mode={props.mode} type="text" id="floatingName" name="name" label="Name" />
                    <Input inputValue={formData.email} changeFormData={changeFormData} mode={props.mode} type="email" id="floatingEamil" name="email" label="Email" />
                </>
            );
        }
    }

    const toggleSignBtnValue = (sign) => {
        if(sign === "up") {
            return "Already have an account?";
        } else {
            return "Don't have an account?";
        }
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/register', formData);
        if(response.data.registerationSuccessful) {
            setUsernameErr(false);
            setFormData({username:"", password:""});
            props.toggleSign();
        } else {
            window.alert("Sign Up Unsuccessful!!!");
            if(response.data.registerationMessage === "USER ALREADY EXITS!!!") {
                setUsernameErr(true);
            }
        }
    }
    
    const handleSignIn = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/login', formData);
        if(response.data.isAuthenticated) {
            props.changeUser(response.data);
        } else {
            window.alert("Sign In Unsuccessful!!!" + "\n" + "USERNAME OR PASSWORD INCORRECT!!!");
        }
    }

    const passwordFields = (sign) => {
        if(sign === "up") {
            return (
                <>
                    <Input inputValue={formData.password1} changeFormData={changeFormData} mode={props.mode} type="password" id="floatingPassword1" name="password1" label="Password" />
                    <Input inputValue={formData.password2} changeFormData={changeFormData} err={checkPasswords()} msg="Passwords don't matched!!!" mode={props.mode} type="password" id="floatingPassword2" name="password2" label="Password" />
                </>
            );
        } else {
            return (
                <>
                    <Input inputValue={formData.password} changeFormData={changeFormData} mode={props.mode} type="password" id="floatingPassword" name="password" label="Password" />
                </>
            );
        }
    }

    const googleSignUp = async (event) => {
        event.preventDefault();
        window.open('/api/auth/google', '_self');
    }

    return (
        <div className="col-md-10 mx-auto col-lg-5">
            <form className={`p-4 p-md-5 border rounded-3 ${props.mode === "dark" ? "bg-dark": "bg-body-tertiary"}`}>
                <h1 className={`mb-3 text-center ${props.mode === "dark" && "darkMode"}`}>Sign {props.sign} Form</h1>
                {signUpFields(props.sign)}
                <Input inputValue={formData.username} err={usernameErr} changeFormData={changeFormData} msg="Username Already Exists!!!" mode={props.mode} type="text" id="floatingUsername" name="username" label="Username" />
                {passwordFields(props.sign)}
                <button disabled={props.sign === "up" && checkPasswords()} onClick={props.sign === "up" ? handleSignUp : handleSignIn} className={`w-100 btn btn-lg btn-${props.mode}`} type="submit">Sign {props.sign}</button>
                <div className={`text-center my-2 ${props.mode==="dark" && "darkMode"}`}>OR</div>
                <button onClick={googleSignUp} className={`w-100 btn btn-lg btn-${props.mode} d-flex gap-2 justify-content-center aling-items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-google align-self-center" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                    <span>Sign {props.sign} with Google</span>
                </button>
                <p className={`toggleSignBtn mt-4 text-center ${props.mode === "dark" && "darkMode"}`}><u><a onClick={props.toggleSign}>{toggleSignBtnValue(props.sign)}</a></u></p>
            </form>
        </div>
    );
}

export default Form
