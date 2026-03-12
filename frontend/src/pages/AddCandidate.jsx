import React, {useState} from "react";
import axios from "axios";

function AddCandidate(){

const [name,setName] = useState("");
const [party,setParty] = useState("");

const addCandidate = async()=>{

await axios.post("http://localhost:4000/api/candidates/add",{
name,
party
});

alert("Candidate Added");

};

return(

<div>

<h2>Add Candidate</h2>

<input
placeholder="Candidate Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/>

<input
placeholder="Party"
onChange={(e)=>setParty(e.target.value)}
/>

<br/>

<button onClick={addCandidate}>
Add Candidate
</button>

</div>

)

}

export default AddCandidate;