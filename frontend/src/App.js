import React from "react";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Polls from "./pages/Polls";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

function App(){

const token = localStorage.getItem("token");

return(

<Router>

<Routes>

<Route path="/" element={
token ? <Navigate to="/home"/> : <Navigate to="/login"/>
}/>

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/home" element={
token ? <Home/> : <Navigate to="/login"/>
}/>

<Route path="/vote" element={
token ? <Vote/> : <Navigate to="/login"/>
}/>

<Route path="/polls" element={
token ? <Polls/> : <Navigate to="/login"/>
}/>

<Route path="/results" element={
token ? <Results/> : <Navigate to="/login"/>
}/>

<Route path="/admin" element={
token ? <Admin/> : <Navigate to="/login"/>
}/>

</Routes>

</Router>

);

}

export default App;