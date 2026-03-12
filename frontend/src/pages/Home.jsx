import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){

const navigate = useNavigate();

const logout = ()=>{
localStorage.clear();
navigate("/login");
};

return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px",
fontFamily:"sans-serif"
}}>

{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<h1 style={{
fontSize:"36px",
color:"#22c55e"
}}>
🗳 Voting Platform
</h1>

<button
onClick={logout}
style={{
background:"#ef4444",
border:"none",
padding:"10px 18px",
borderRadius:"6px",
color:"white",
cursor:"pointer",
fontWeight:"bold"
}}
>
Logout
</button>

</div>


<p style={{
marginTop:"5px",
color:"#94a3b8"
}}>
Secure elections & poll voting system
</p>



{/* DASHBOARD CARDS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"30px",
marginTop:"60px"
}}>

{/* ELECTION CARD */}

<div
onClick={()=>navigate("/vote")}
style={{
background:"#1e293b",
padding:"40px",
borderRadius:"12px",
cursor:"pointer",
textAlign:"center",
transition:"0.3s",
border:"1px solid #334155"
}}
onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h2 style={{color:"#22c55e"}}>🗳 Elections</h2>

<p style={{color:"#94a3b8"}}>
Vote for candidates in elections
</p>

</div>



{/* POLL CARD */}

<div
onClick={()=>navigate("/polls")}
style={{
background:"#1e293b",
padding:"40px",
borderRadius:"12px",
cursor:"pointer",
textAlign:"center",
transition:"0.3s",
border:"1px solid #334155"
}}
onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h2 style={{color:"#22c55e"}}>📊 Polls</h2>

<p style={{color:"#94a3b8"}}>
Participate in active polls
</p>

</div>



{/* RESULTS CARD */}

<div
onClick={()=>navigate("/results")}
style={{
background:"#1e293b",
padding:"40px",
borderRadius:"12px",
cursor:"pointer",
textAlign:"center",
transition:"0.3s",
border:"1px solid #334155"
}}
onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h2 style={{color:"#22c55e"}}>📈 Results</h2>

<p style={{color:"#94a3b8"}}>
View voting results & analytics
</p>

</div>

</div>


{/* FOOTER */}

<div style={{
marginTop:"80px",
textAlign:"center",
color:"#64748b"
}}>

<p>© 2026 Universal Voting Platform</p>

</div>

</div>

);

}

export default Home;