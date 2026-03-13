import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

const login = async () => {

try{

const res = await axios.post(
"https://online-voting-system-zy9r.onrender.com///api/auth/login",
{
email,
password
}
);

localStorage.setItem("token",res.data.token);
localStorage.setItem("userId",res.data.user.id);
localStorage.setItem("role",res.data.user.role);

alert("Login Successful");

if(res.data.user.role === "admin"){
window.location.href="/admin";
}else{
window.location.href="/home";
}

}catch(err){

alert(err.response?.data?.message || "Invalid Credentials");

}

};


return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#020617"
}}>

<div style={{
width:"380px",
padding:"30px",
borderRadius:"12px",
background:"#1e293b",
boxShadow:"0px 0px 20px #000",
color:"white"
}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>
Login
</h2>

<input
value={email}
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
marginBottom:"12px",
padding:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<input
value={password}
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
marginBottom:"12px",
padding:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<button
onClick={login}
disabled={loading}
style={{
width:"100%",
padding:"12px",
background:"#3b82f6",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"bold"
}}
>
{loading ? "Logging in..." : "Login"}
</button>

<p style={{
marginTop:"15px",
textAlign:"center",
color:"#94a3b8"
}}>

New user?

<Link
to="/register"
style={{
marginLeft:"5px",
color:"#38bdf8",
textDecoration:"none"
}}
>
Register here
</Link>

</p>

</div>

</div>

);

}

export default Login;