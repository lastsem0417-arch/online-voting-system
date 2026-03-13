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


// ---------------- LOAD ELECTIONS ----------------

const loadElections = ()=>{
axios.get("http://localhost:4000/api/elections")
.then(res=>setElections(res.data))
.catch(err=>console.log(err));
};

useEffect(()=>{
loadElections();
},[]);


// ---------------- CREATE POLL ----------------

const addOption = ()=>{
setOptions([...options,""]);
};

const createPoll = async()=>{

if(!pollTitle) return alert("Enter poll title");

await axios.post(
"http://localhost:4000/api/polls/create",
{
title:pollTitle,
options
}
);

alert("Poll Created");

setPollTitle("");
setOptions(["",""]);

};


// ---------------- CREATE ELECTION ----------------

const createElection = async()=>{

if(!electionTitle) return alert("Enter election title");

await axios.post(
"http://localhost:4000/api/elections/create",
{
title:electionTitle,
type:"candidate"
}
);

alert("Election Created");

setElectionTitle("");

loadElections();

};


// ---------------- DELETE ELECTION ----------------

const deleteElection = async(id)=>{

if(!window.confirm("Delete this election?")) return;

await axios.delete(
`http://localhost:4000/api/elections/${id}`
);

alert("Election Deleted");

loadElections();

};


// ---------------- ADD CANDIDATE ----------------

const addCandidate = async()=>{

if(!selectedElection) return alert("Select election");

await axios.post(
"http://localhost:4000/api/candidates/add",
{
name:candidateName,
party,
electionId:selectedElection
}
);

alert("Candidate Added");

setCandidateName("");
setParty("");

};


// ---------------- UI ----------------

return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{
textAlign:"center",
marginBottom:"40px",
fontSize:"32px"
}}>
⚡ Admin Dashboard
</h1>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",
gap:"30px"
}}>



{/* CREATE ELECTION */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 0 20px #000"
}}>

<h2>Create Election</h2>

<input
placeholder="Election Title"
value={electionTitle}
onChange={(e)=>setElectionTitle(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<button
onClick={createElection}
style={{
background:"#22c55e",
border:"none",
padding:"10px 20px",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}}
>
Create Election
</button>

</div>



{/* ADD CANDIDATE */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 0 20px #000"
}}>

<h2>Add Candidate</h2>

<select
value={selectedElection}
onChange={(e)=>setSelectedElection(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px"
}}
>

<option value="">Select Election</option>

{elections.map(e=>(
<option key={e._id} value={e._id}>
{e.title}
</option>
))}

</select>


<input
placeholder="Candidate Name"
value={candidateName}
onChange={(e)=>setCandidateName(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<input
placeholder="Party / Group"
value={party}
onChange={(e)=>setParty(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<button
onClick={addCandidate}
style={{
background:"#3b82f6",
border:"none",
padding:"10px 20px",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}}
>
Add Candidate
</button>

</div>



{/* CREATE POLL */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 0 20px #000"
}}>

<h2>Create Poll</h2>

<input
placeholder="Poll Title"
value={pollTitle}
onChange={(e)=>setPollTitle(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px",
border:"none"
}}
/>

{options.map((opt,i)=>(
<input
key={i}
placeholder={`Option ${i+1}`}
value={opt}
onChange={(e)=>{
const newOptions=[...options];
newOptions[i]=e.target.value;
setOptions(newOptions);
}}
style={{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"6px",
border:"none"
}}
/>
))}

<button
onClick={addOption}
style={{
background:"#3b82f6",
border:"none",
padding:"10px",
color:"white",
marginRight:"10px",
borderRadius:"6px"
}}
>
Add Option
</button>

<button
onClick={createPoll}
style={{
background:"#22c55e",
border:"none",
padding:"10px",
color:"white",
borderRadius:"6px"
}}
>
Create Poll
</button>

</div>



{/* EXISTING ELECTIONS */}

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 0 20px #000"
}}>

<h2>Existing Elections</h2>

{elections.map(e=>(
<div
key={e._id}
style={{
display:"flex",
justifyContent:"space-between",
padding:"10px",
borderBottom:"1px solid #334155"
}}
>

<span>{e.title}</span>

<button
onClick={()=>deleteElection(e._id)}
style={{
background:"#ef4444",
border:"none",
padding:"5px 10px",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}}
>
Delete
</button>

</div>
))}

</div>



</div>

</div>

)

}

export default Admin;