import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";

function Register(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const navigate=useNavigate();
    function firstnameHandler(e) {
        setFirstname(e.target.value)
    }
    function lastnameHandler(e) {
        setLastname(e.target.value)
    }
    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }
    function emailHandler(e) {
        setEmail(e.target.value);
    }
    function password_confirmationHandler(e) {
        setPassword_confirmation(e.target.value)
    }

    function register() {
         if (!firstname || !lastname || !username || !password || !email || !password_confirmation) {
            alert("Please fill out all fields.");
            return;
        }
         if (password !== password_confirmation) {
            alert("Passwords do not match.");
            return;
        }
         if(password.length < 6){
            alert("Password must be at least 6 characters long.");
            return;
        }

        let data = JSON.stringify({
            "first_name": firstname,
            "last_name": lastname,
            "username": username,
            "password": password,
            "email": email,
            "password_confirmation": password_confirmation
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000//api/users/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                navigate('/login');
            })
            .catch((error) => {
                console.log(error);
                navigate('/');
            });

    }

    return (
        <div>
            <h1>Register</h1>
            <p>Username <input id={"username"} type={'text'} onChange={usernameHandler}/></p>
            <p>Email <input id={"email"} type={'email'} onChange={emailHandler}/></p>
            <p>First Name <input id={"firstname"} type={'text'} onChange={firstnameHandler}/></p>
            <p>Last Name <input id={"lastname"} type={'text'} onChange={lastnameHandler}/></p>
            <p>Password <input id={"password"} type={'password'} onChange={passwordHandler}/></p>
            <p>Password Confirmation <input id={"password_confirmation"} type={'password'} onChange={password_confirmationHandler}/></p>
            <p>
                <button id={"registerbtn"} onClick={register}>Register</button>
            </p>

        </div>
    );
}

export default Register;