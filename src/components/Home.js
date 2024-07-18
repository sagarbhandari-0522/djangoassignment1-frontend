import React, { useState } from 'react';
import Login from "./Login";
import Register from "./Register";

function Home(props) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <div>
            <div>
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
            </div>
            {showLogin && <Login />}
            {showRegister && <Register />}
        </div>
    );
}

export default Home;
