import React,{useEffect,useState} from "react";
import axios from "axios";

function Polls(){

const [polls,setPolls] = useState([]);

useEffect(()=>{

axios.get("https://online-voting-system-zy9r.onrender.com///api/polls")
.then(res=>{
setPolls(res.data);
});

},[]);

const vote = async(pollId,index)=>{

await axios.post("https://online-voting-system-zy9r.onrender.com///api/polls/vote",{
pollId,
optionIndex:index,
userId:localStorage.getItem("userId")
});

window.location.reload();

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
📊 Active Polls
</h1>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",
gap:"30px"
}}>

{polls.map(poll=>{

const totalVotes = poll.options.reduce((a,b)=>a+b.votes,0);

const winner = poll.options.reduce((prev,current)=>
prev.votes>current.votes?prev:current
);

return(

<div key={poll._id}
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 0 15px #000"
}}
>

<h2>{poll.title}</h2>


{poll.options.map((opt,i)=>{

const percent = totalVotes===0
?0
:Math.round((opt.votes/totalVotes)*100);

return(

<div key={i} style={{marginTop:"15px"}}>

<button
onClick={()=>vote(poll._id,i)}
style={{
width:"100%",
padding:"10px",
background:"#3b82f6",
border:"none",
color:"white",
borderRadius:"6px"
}}
>

{opt.text}

</button>


<div style={{
background:"#0f172a",
borderRadius:"5px",
height:"10px",
marginTop:"5px"
}}>

<div style={{
width:`${percent}%`,
background:"#22c55e",
height:"10px",
borderRadius:"5px"
}}/>

</div>


<div style={{fontSize:"12px",marginTop:"3px"}}>

Votes: {opt.votes} ({percent}%)

</div>

</div>

);

})}


<div style={{
marginTop:"15px",
color:"#22c55e",
fontWeight:"bold"
}}>

🏆 Leading: {winner.text}

</div>

</div>

);

})}

</div>

</div>

);

}

export default Polls;