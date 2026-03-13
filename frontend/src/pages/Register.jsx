import React,{useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const register = async () => {

await axios.post("https://online-voting-system-zy9r.onrender.com///api/auth/register",{
name,
email,
password
});

alert("Registration Successful");

navigate("/login");

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

<h2 style={{
textAlign:"center",
marginBottom:"20px"
}}>
Register
</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
style={{
width:"100%",
marginBottom:"12px",
padding:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<input
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
onClick={register}
style={{
width:"100%",
padding:"12px",
background:"#22c55e",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"bold"
}}
>
Register
</button>

<p style={{
marginTop:"15px",
textAlign:"center",
color:"#94a3b8"
}}>

Already have account?

<Link
to="/login"
style={{
marginLeft:"5px",
color:"#38bdf8",
textDecoration:"none"
}}
>
Login
</Link>

</p>

</div>

</div>

);

}

export default Register;