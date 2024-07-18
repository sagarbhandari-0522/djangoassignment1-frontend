//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router";
import Login from "./components/Login";

function App() {
return (
    <div className="App">
         <Routes>
              <Route path="/login" element={<Login/>}/>
         </Routes>
    </div>
  );
}

export default App;
