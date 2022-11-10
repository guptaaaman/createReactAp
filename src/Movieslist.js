import React, { useContext } from "react";
import { Moviesprovider } from "./Moviecontext";
function Movielist() {
    const obj=useContext(Moviesprovider)
    const moviedata=obj.movies.map((movie)=>{
        return <div> <h1>movie name is {movie.moviename}</h1>
        <p> name of directoris{movie.directorname}</p> </div>
    })
    
    return <div>
       <h1> MovieData</h1>
{moviedata}
    </div>
    
}export default Movielist