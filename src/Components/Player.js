import { use, useEffect, useState } from "react";
import PlayerService from "../service/PlayerService";
import { Link} from "react-router-dom";

export function Player(){
    const[players,setPlayers]=useState([]);
    const[id,setId]=useState();
    const[detail,setDetails]=useState(null);
    
    useEffect(()=>{
        get();
    },[])
    const get=()=>{
        PlayerService.getall().then((response)=>{
            setPlayers(response.data);
        }).catch((error)=>{
            alert("Data not loaded");
        })
    }
    const getby=()=>{
        PlayerService.getbyid(id).then((response)=>{
            setDetails(response.data);
        }).catch((error)=>{
            alert("NO player found");
        })
    }

    return(
        <>
        <h1 style={{textAlign:"center"}}>List of all Players</h1>
    <table className="table table-striped table-bordered table-hover text-center align-middle">
        
            <thead>
                <th>Id</th>
                <th>Player Name</th>
                <th>JerseyNumber</th>
                <th>Matches Played</th>
                <th>Team Name</th>
                <th>Role</th>
                <th>State</th>
                <th>Description</th>
                <th>Update</th>
                
            </thead>
            <tbody>
                {players.map((items)=>(
                    <tr key={items.playerId}>
                    <td>{items.playerId}</td>
                    <td>{items.playerName}</td>
                    <td>{items.jerseyNumber}</td>
                    <td>{items.matchesPlayed}</td>
                    <td>{items.teamName}</td>
                    <td>{items.role}</td>
                    <td>{items.state}</td>
                    <td>{items.description}</td>
                    <td><Link to={`/update/${items.playerId}`} ><button>Update</button></Link></td>
                    
                    
                    </tr>
                ))}
            </tbody>
    </table>
    <p>Get Player By id</p>
    <input type="text" value={id} onChange={(e)=>setId(e.target.value)} className="form-control-sm"></input>
    <button onClick={getby}>Search</button>
    {detail&&(
        <div>
    <p>Id:{detail.playerId}</p>
    <p>Player Name:{detail.playerName}</p>
    <p>Jersey Number:{detail.jerseyNumber}</p>
    <p>Matches Played:{detail.matchesPlayed}</p>
    <p>Team Name:{detail.teamName}</p>
    <p>Role:{detail.role}</p>
    <p>State:{detail.state}</p>
    <p>Description:{detail.description}</p>

    </div>
    )}
    </>      
    
    )

}