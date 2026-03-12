import React,{useState,useEffect} from "react";
import axios from "axios";

function Vote(){

const [elections,setElections] = useState([]);
const [selectedElection,setSelectedElection] = useState("");

const [candidates,setCandidates] = useState([]);

const [votedElections,setVotedElections] = useState([]);

const userId = localStorage.getItem("userId");


useEffect(()=>{

axios.get("http://localhost:4000/api/elections")
.then(res=>{
setElections(res.data);
});

axios.get(`http://localhost:4000/api/auth/user/${userId}`)
.then(res=>{
setVotedElections(res.data.votedElections || []);
});

},[]);



const loadCandidates = async(electionId)=>{

setSelectedElection(electionId);

const res = await axios.get(
`http://localhost:4000/api/candidates/${electionId}`
);

setCandidates(res.data);

};



const vote = async(candidateId)=>{

if(votedElections.includes(selectedElection)){
alert("You already voted in this election");
return;
}

await axios.post("http://localhost:4000/api/vote",{

candidateId,
userId,
electionId:selectedElection

});

alert("Vote submitted");

setVotedElections([...votedElections,selectedElection]);

};



return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1>🗳 Elections</h1>


{/* ELECTION LIST */}

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
padding:"10px",
color:"white",
borderRadius:"5px"
}}
>

{e.title}

</button>

))}

</div>



{/* CANDIDATES */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{candidates.map(c=>{

const voted = votedElections.includes(selectedElection);

return(

<div
key={c._id}
style={{
background:"#1e293b",
padding:"20px",
borderRadius:"10px",
textAlign:"center"
}}
>

<h3>{c.name}</h3>
<p>{c.party}</p>

<button
onClick={()=>vote(c._id)}
disabled={voted}
style={{
background:voted ? "gray":"#22c55e",
border:"none",
padding:"10px",
color:"white",
borderRadius:"5px"
}}
>

{voted ? "Already Voted" : "Vote"}

</button>

</div>

);

})}

</div>

</div>

)

}

export default Vote;