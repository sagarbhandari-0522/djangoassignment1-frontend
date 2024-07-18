//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Home from "./components/Home";

function App() {
return (
    <div className="App">
         <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout/>}/>
         </Routes>
    </div>
  );
}

export default App;
