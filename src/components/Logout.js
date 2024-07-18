import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";
import {useNavigate} from "react-router";

function Logout(props) {
    const navigate=useNavigate();
    const [token, setToken] = useState("");
      useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken); // Update the state with the token
        }
    }, []);
    function logout(){
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BaseUrl+'users/logout/',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
          }
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
           localStorage.removeItem('token');
           navigate('/login');

        })
        .catch((error) => {
          console.log(error);
        });
    }
    return (
        <div>
            <p>
                <button id={"logoutbtn"} onClick={logout} value={"Logout"}>Logout</button>
            </p>
        </div>
    );
}

export default Logout;