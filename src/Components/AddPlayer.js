import { useState } from "react"
import PlayerService from "../service/PlayerService";

export function AddPlayer(){
    const[details,setDetails]=useState({playerName:"",jerseyNumber:"",matchesPlayed:"",teamName:"",role:"",state:"",description:""});
    const handle=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value})
    }
    const submit=(e)=>{
        e.preventDefault();
        PlayerService.add(details).then((response)=>{
           alert("player added");
        }).catch((error)=>{
            alert("Data not added")
        })
        setDetails({playerName:"",jerseyNumber:"",matchesPlayed:"",team:"",state:"",description:""});

    }
    return(
        <>
        <h1>Add New Player</h1>
        <form>
            <label htmlFor="playerName">Player Name:</label>
            <input type="text" name="playerName" value={details.playerName} onChange={handle} className="form-control"></input>
            <label htmlFor="jerseyNumber">Jersey Number:</label>
            <input type="number" name="jerseyNumber" value={details.jerseyNumber} onChange={handle} className="form-control"></input>
            <label htmlFor="matchesPlayed">Matches Played:</label>
            <input type="number" name="matchesPlayed" value={details.matchesPlayed} onChange={handle} className="form-control"></input>
            <label htmlFor="teamName">Player Team:</label>
            <input type="text" name="teamName" value={details.teamName} onChange={handle} className="form-control"></input>
            <label htmlFor="role">Role:</label>
            <input type="text" name="role" value={details.role} onChange={handle} className="form-control"></input>
            <label htmlFor="state">State:</label>
            <input type="text" name="state" value={details.state} onChange={handle} className="form-control"></input>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" value={details.description} onChange={handle} className="form-control"></input>
            <button type="submit" onClick={submit} className="btn btn-success">Add</button>
        </form>

        </>
    )

}