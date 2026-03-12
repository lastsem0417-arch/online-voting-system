import React,{useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const register = async () => {

await axios.post("http://localhost:4000/api/auth/register",{
name,
email,
password
});

alert("Registration Successful");

navigate("/login");

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

<h2 style={{textAlign:"center"}}>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
style={{width:"100%",marginBottom:"10px",padding:"8px"}}
/>

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
onClick={register}
style={{
width:"100%",
padding:"10px",
background:"green",
color:"white",
border:"none",
borderRadius:"5px"
}}
>
Register
</button>

<p style={{marginTop:"15px",textAlign:"center"}}>

Already have account?

<Link to="/login" style={{marginLeft:"5px",color:"blue"}}>
Login
</Link>

</p>

</div>

</div>

);

}

export default Register;