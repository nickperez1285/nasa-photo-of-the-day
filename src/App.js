import React, {useState} from "react";
import "./App.css";
import MarsPix from "./Components/MarsPix"
import MarsWords from "./Components/MarsWords"

import Rover from "./Components/Rover"


const App =  () => {
const [cars, setCars]=  useState( "caraOb")
// const addCar= () => {  setCars([
	
// ])
// }

// addCar()
      	// console.log({cars})

  return (

    <div className="App">
    <h1> Nicks NASA Nook</h1>
      	<MarsPix />
      	<MarsWords/> 
      	<Rover cars = {cars}/>

      
    </div>

  );
}

export default App;
