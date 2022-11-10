import React, { useContext, useState } from "react";
import { Moviesprovider } from "./Moviecontext";
function Addmovie() {
    const[moviename, setmoviename]=useState('')
    const[directorname,setdirectorname]=useState('')
    const obj=useContext(Moviesprovider)
    function add() {
        var movie={
            moviename:moviename,
            directorname:directorname
        }
        obj.addmovie(movie)
    }
    return <div>
<input type="text"placeholder="Moviename" value={moviename} onChange={(event)=>{setmoviename(event.target.value)}}/> <br />
<input type="text" placeholder="Directorname" value={directorname} onChange={(event)=>{setdirectorname(event.target.value)} }/><br />
<button onClick={add}>Add Movie</button>
    </div>
    
}export default Addmovie