import React,{useState,useEffect} from "react";
import axios from "axios";

function Admin(){

const [pollTitle,setPollTitle] = useState("");
const [options,setOptions] = useState(["",""]);

const [electionTitle,setElectionTitle] = useState("");

const [candidateName,setCandidateName] = useState("");
const [party,setParty] = useState("");
const [elections,setElections] = useState([]);
const [selectedElection,setSelectedElection] = useState("");

useEffect(()=>{

axios.get("http://localhost:4000/api/elections")
.then(res=>setElections(res.data));

},[]);



/* ---------------- POLL ---------------- */

const addOption = ()=>{
setOptions([...options,""]);
};

const createPoll = async()=>{

await axios.post("http://localhost:4000/api/polls/create",{
title:pollTitle,
options
});

alert("Poll Created");

};



/* ---------------- ELECTION ---------------- */

const createElection = async()=>{

await axios.post("http://localhost:4000/api/elections/create",{
title:electionTitle
});

alert("Election Created");

};



/* ---------------- ADD CANDIDATE ---------------- */

const addCandidate = async()=>{

await axios.post("http://localhost:4000/api/candidates/add",{
name:candidateName,
party,
electionId:selectedElection
});

alert("Candidate Added");

};



return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{
textAlign:"center",
marginBottom:"40px"
}}>
⚡ Admin Dashboard
</h1>



<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"40px"
}}>



{/* CREATE POLL */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"10px"
}}>

<h2>Create Poll</h2>

<input
placeholder="Poll Title"
onChange={(e)=>setPollTitle(e.target.value)}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

{options.map((opt,i)=>(

<input
key={i}
placeholder={`Option ${i+1}`}
onChange={(e)=>{

const newOptions=[...options];
newOptions[i]=e.target.value;
setOptions(newOptions);

}}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

))}

<button onClick={addOption}
style={{
background:"#3b82f6",
border:"none",
padding:"10px",
color:"white",
marginRight:"10px"
}}
>
Add Option
</button>

<button onClick={createPoll}
style={{
background:"#22c55e",
border:"none",
padding:"10px",
color:"white"
}}
>
Create Poll
</button>

</div>



{/* CREATE ELECTION */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"10px"
}}>

<h2>Create Election</h2>

<input
placeholder="Election Title"
onChange={(e)=>setElectionTitle(e.target.value)}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<button
onClick={createElection}
style={{
background:"#22c55e",
border:"none",
padding:"10px",
color:"white"
}}
>
Create Election
</button>

</div>



{/* ADD CANDIDATE */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"10px"
}}>

<h2>Add Candidate</h2>

<select
onChange={(e)=>setSelectedElection(e.target.value)}
style={{
width:"100%",
padding:"8px",
marginBottom:"10px"
}}
>

<option>Select Election</option>

{elections.map(e=>(
<option key={e._id} value={e._id}>
{e.title}
</option>
))}

</select>


<input
placeholder="Candidate Name"
onChange={(e)=>setCandidateName(e.target.value)}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<input
placeholder="Party / Group"
onChange={(e)=>setParty(e.target.value)}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<button
onClick={addCandidate}
style={{
background:"#22c55e",
border:"none",
padding:"10px",
color:"white"
}}
>
Add Candidate
</button>

</div>



{/* EXISTING ELECTIONS */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"10px"
}}>

<h2>Existing Elections</h2>

{elections.map(e=>(
<div key={e._id}
style={{
padding:"8px",
borderBottom:"1px solid #334155"
}}
>
{e.title}
</div>
))}

</div>



</div>

</div>

)

}

export default Admin;