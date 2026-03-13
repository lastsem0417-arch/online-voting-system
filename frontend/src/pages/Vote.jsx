import React,{useState,useEffect} from "react";
import axios from "axios";

function Vote(){

const [elections,setElections] = useState([]);
const [selectedElection,setSelectedElection] = useState("");
const [candidates,setCandidates] = useState([]);
const [votedElections,setVotedElections] = useState([]);

const userId = localStorage.getItem("userId");


// load elections + user vote status
useEffect(()=>{

axios.get("http://localhost:4000/api/elections")
.then(res=>setElections(res.data));

loadUserVotes();

},[]);


// load vote status
const loadUserVotes = async()=>{

const res = await axios.get(
`http://localhost:4000/api/auth/user/${userId}`
);

setVotedElections(res.data.user?.votedElections || []);

};


// load candidates
const loadCandidates = async(electionId)=>{

setSelectedElection(electionId);

const res = await axios.get(
`http://localhost:4000/api/candidates/${electionId}`
);

setCandidates(res.data);

};


// vote function
const vote = async(candidateId)=>{

try{

const res = await axios.post(
"http://localhost:4000/api/vote",
{
candidateId,
userId,
electionId:selectedElection
}
);

alert(res.data.message);

// update vote state
setVotedElections(res.data.votedElections);

}catch(err){

alert(err.response?.data?.message || "Vote error");

}

};


// check voted
const voted = votedElections.some(
id => id.toString() === selectedElection
);


// UI
return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{marginBottom:"30px"}}>
🗳 Elections
</h1>


{/* elections list */}

<div style={{
display:"flex",
gap:"10px",
marginBottom:"30px",
flexWrap:"wrap"
}}>

{elections.map(e=>(

<button
key={e._id}
onClick={()=>loadCandidates(e._id)}
style={{
background:"#3b82f6",
border:"none",
padding:"10px 15px",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}}
>

{e.title}

</button>

))}

</div>



{/* candidates */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{candidates.map(c=>(

<div
key={c._id}
style={{
background:"#1e293b",
padding:"20px",
borderRadius:"10px",
textAlign:"center",
boxShadow:"0 0 10px #000"
}}
>

<div style={{fontSize:"40px"}}>
🧑‍💼
</div>

<h3>{c.name}</h3>
<p style={{color:"#94a3b8"}}>{c.party}</p>

<button
onClick={()=>vote(c._id)}
disabled={voted}
style={{
background:voted ? "gray":"#22c55e",
border:"none",
padding:"10px 20px",
color:"white",
borderRadius:"6px",
cursor:voted ? "not-allowed":"pointer"
}}
>

{voted ? "Already Voted" : "Vote"}

</button>

</div>

))}

</div>

</div>

);

}

export default Vote;