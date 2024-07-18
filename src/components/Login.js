import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";

import {useNavigate} from "react-router";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [login_status, setLogin_status] = useState("")
    const navigate=useNavigate();
    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }
    function login(){
         if ( !username || !password) {
            alert("Please fill out all fields.");
            return;
        }
        let data = JSON.stringify({
          "username": username,
          "password": password
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BaseUrl+'users/login/',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          localStorage.setItem('token', response.data.token);
          setLogin_status("Login Success!");
          navigate('/dashboard');
        })
        .catch((error) => {
            console.log(error);
            alert("Username or Password is wrong!");
        });


    }
    return (
        <div>
            <h1>login page</h1>
            <p>Username <input id={"username"} type={'text'}  required={true} onChange={usernameHandler}/></p>
            <p>Password <input id={"password"} type={'password'}  required={true} onChange={passwordHandler}/></p>
            <p>
                <button id={"loginbtn"} onClick={login}>Login</button>
            </p>
            <p id={'login_status'}>{login_status}</p>
        </div>
    );
}


export default Login;