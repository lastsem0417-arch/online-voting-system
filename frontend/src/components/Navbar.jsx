import React from "react";

function Navbar(){

const logout = ()=>{

localStorage.clear();

window.location.href="/login";

};

return(

<div style={{
background:"#222",
color:"white",
padding:"10px",
display:"flex",
justifyContent:"space-between"
}}>

<h3>Online Voting System</h3>

<button onClick={logout} style={{
background:"red",
color:"white",
border:"none",
padding:"8px"
}}>
Logout
</button>

</div>

);

}

export default Navbar;