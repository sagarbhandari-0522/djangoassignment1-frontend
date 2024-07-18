import React from 'react';
import Logout from "./Logout";

function Dashboard(props) {
    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome to the Dashboard!</p>
            <Logout/>
        </div>
    );
}

export default Dashboard;