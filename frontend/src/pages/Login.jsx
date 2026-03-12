import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = async () => {

try{

const res = await axios.post("http://localhost:4000/api/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);
localStorage.setItem("userId",res.data.user.id);

alert("Login Successful");

navigate("/");

}catch(err){

alert("Invalid Credentials");

}

};

return(

<div style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>

<div style={{
width:"350px",
padding:"30px",
border:"1px solid #ccc",
borderRadius:"10px",
boxShadow:"0px 0px 10px #ddd"
}}>

<h2 style={{textAlign:"center"}}>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
style={{width:"100%",marginBottom:"10px",padding:"8px"}}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
style={{width:"100%",marginBottom:"10px",padding:"8px"}}
/>

<button
onClick={login}
style={{
width:"100%",
padding:"10px",
background:"blue",
color:"white",
border:"none",
borderRadius:"5px"
}}
>
Login
</button>

<p style={{marginTop:"15px",textAlign:"center"}}>

New user?  

<Link to="/register" style={{marginLeft:"5px",color:"blue"}}>
Register here
</Link>

</p>

</div>

</div>

);

}

export default Login;