import { useState } from "react"

import PlayerService from "../service/PlayerService";

export function SearchPlayer(){
    const[player,setPlayer]=useState([]);
    const[role,setRole]=useState();
    const display=()=>
        PlayerService.display(role).then((response)=>{
            setPlayer(response.data)
            console.log("Displayed")
        }).catch((error)=>{
            alert("error");
        })
    return(
        <>
        <h1 style={{textAlign:"center"}}>Display Based on Role</h1>
        <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} className="form-control-sm"></input>
        <button style={{color:"green"}} onClick={display}>Search</button>
       <table className="table table-bordered table-striped table-hover">
  <thead className="thead-dark">
    <tr>
      <th>Id</th>
      <th>Player Name</th>
      <th>Jersey Number</th>
      <th>Matches Played</th>
      <th>Team Name</th>
      <th>Role</th>
      <th>State</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {player.map((detail) => (
      <tr key={detail.playerId}>
        <td>{detail.playerId}</td>
        <td>{detail.playerName}</td>
        <td>{detail.jerseyNumber}</td>
        <td>{detail.matchesPlayed}</td>
        <td>{detail.teamName}</td>
        <td>{detail.role}</td>
        <td>{detail.state}</td>
        <td>{detail.description}</td>
      </tr>
    ))}
  </tbody>
</table>
        )))

        
        </>
    )
    
}