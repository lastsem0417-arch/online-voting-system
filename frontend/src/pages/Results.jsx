import React,{useEffect,useState} from "react";
import axios from "axios";

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
PieChart,
Pie,
Cell
} from "recharts";

const COLORS=["#3b82f6","#22c55e","#f59e0b","#ef4444","#8b5cf6"];

function Results(){

const [elections,setElections]=useState([]);
const [polls,setPolls]=useState([]);
const [results,setResults]=useState({});

useEffect(()=>{

loadData();

},[]);



const loadData=async()=>{

const eRes=await axios.get("http://localhost:4000/api/elections");
const pRes=await axios.get("http://localhost:4000/api/polls");

setElections(eRes.data);
setPolls(pRes.data);

const obj={};

for(const e of eRes.data){

const r=await axios.get(
`http://localhost:4000/api/candidates/results/${e._id}`
);

obj[e._id]=r.data;

}

setResults(obj);

};



return(

<div style={{
background:"#020617",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{textAlign:"center"}}>
📊 Voting Results Dashboard
</h1>



{/* ELECTION RESULTS */}

<h2 style={{marginTop:"40px"}}>
🗳 Election Results
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
gap:"30px",
marginTop:"20px"
}}>

{elections.map(e=>{

const data=results[e._id]||[];

if(data.length===0) return null;

const winner=data[0];

return(

<div key={e._id}
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"10px"
}}
>

<h3>{e.title}</h3>

<div style={{
color:"#22c55e",
fontWeight:"bold"
}}>
👑 Winner: {winner.name}
</div>


<BarChart width={350} height={250} data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="votes">

{data.map((entry,index)=>(
<Cell key={index} fill={COLORS[index%COLORS.length]}/>
))}

</Bar>

</BarChart>

</div>

);

})}

</div>



{/* POLL RESULTS */}

<h2 style={{marginTop:"60px"}}>
📊 Poll Results
</h2>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
gap:"30px",
marginTop:"20px"
}}>

{polls.map(p=>{

const data=p.options.map(o=>({
name:o.text,
value:o.votes
}));

const winner=p.options.reduce((a,b)=>
a.votes>b.votes?a:b
);

return(

<div key={p._id}
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"10px"
}}
>

<h3>{p.title}</h3>

<div style={{
color:"#22c55e",
fontWeight:"bold"
}}>
👑 Leading: {winner.text}
</div>


<PieChart width={350} height={250}>

<Pie
data={data}
dataKey="value"
nameKey="name"
outerRadius={100}
label
>

{data.map((entry,index)=>(
<Cell key={index} fill={COLORS[index%COLORS.length]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

</div>

);

})}

</div>

</div>

);

}

export default Results;