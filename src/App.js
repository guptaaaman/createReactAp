import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Addmovie from './Addmovies';
import Movielist from './Movieslist';
import Moviecontext from './Moviecontext';
import { useState } from 'react';

const[add,setadd]=useState(false)
const state = useState(false);
  console.log(state)
function App() {





  return (
    <div className="App">
      <Moviecontext>
      <Navbar/>
      <Addmovie/>
      <Movielist/>
      </Moviecontext>
      

    </div>
  );
}

export default App;
