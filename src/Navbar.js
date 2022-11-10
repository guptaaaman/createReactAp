import React, { useContext } from "react";
import { Moviesprovider } from "./Moviecontext";
function Navbar() {
    const ob=useContext(Moviesprovider)
    return <div>
        <h1>The Total Number of Movies are {ob.movies.length}</h1>

    </div>
    
}export default Navbar