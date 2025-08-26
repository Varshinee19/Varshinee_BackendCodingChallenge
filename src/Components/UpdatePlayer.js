import { useEffect, useState } from "react"
import PlayerService from "../service/PlayerService";
import { useNavigate, useParams } from "react-router-dom";

export function UpdatePlayer(){
    const[details,setDetails]=useState({playerName:"",jerseyNumber:"",matchesPlayed:"",teamName:"",role:"",state:"",description:""});
    const{playerId}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        PlayerService.getbyid(playerId).then((response)=>{
            setDetails(response.data);
        })


    },[playerId])
    const handle=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value})
    }
    const submit=(e)=>{
        e.preventDefault();
        PlayerService.update(playerId,details).then((response)=>{
           alert("player updated");
           navigate("/player");
        }).catch((error)=>{
            alert("Data not added")
        })
        

    }
    return(
        <>
        <h1>Update Player</h1>
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
            <button type="submit" onClick={submit} className="btn btn-success">Update</button>
        </form>

        </>
    )

}