import React, { useEffect, useState } from "react";
import axios from 'axios';


const MarsWords = () =>{
const [txt, setTxt] = useState()

axios.get("https://api.nasa.gov/planetary/apod?api_key=JoTvieccFCqs6LCEFyM9IXJ37FhZV6VT85bPbntg")
.then(response => {
 setTxt( response.data.explanation)
 console.log(response.data.explanation)

})
.catch(error => {
console.log("The data was not returned", error);
});




return (
<div className = "mainwrds">
<div> The name of this Photo is </div> 
	<div> {txt}</div>
</div>
)

}
export default MarsWords