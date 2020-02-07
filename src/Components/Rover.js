import React, { useEffect, useState } from "react";
import axios from 'axios';



const Rover = (props) => {

const act= document.getElementsByTagName('li')
const[target , moveFn] = 	useState(0)




useEffect(() => {
	
axios.get("https://api.nasa.gov/planetary/apod?api_key=JoTvieccFCqs6LCEFyM9IXJ37FhZV6VT85bPbntg")
.then(response => {
 setImg(response.data.hdurl)
 console.log(response.data.hdurl)

})
.catch(error => {
console.log("The data was not returned", error);
});

},
[])
const change = () => {
	if(act[0].innerText == "hello"){
		act[3].innerText == "--"
	}else{
		act[(target-1)].innerText == "--"
	}
}

// const moveBtn = () =>{

// 	act[1].innerText= target
// 	console.log(act[0].innerText)
// }
		
return(
<div>
	<ul className = "track"  style={{ listStyleType: "none" }}>
		<li className = ""> -- </li>
		<li className = ""> --</li>
		<li className = ""> --</li>
		<li className = ""> --</li>
	</ul>
    <div> You said hello </div> 
	<p className = "counter"></p>
    <div>times </div> 

	<button onClick = {() => {moveFn( (target +1 )%4 ) ; act[target].innerText = "hello" ; change()  }}> 
	start
	 </button>
</div>
)
}


export default Rover