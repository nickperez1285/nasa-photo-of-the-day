import React, { useState } from "react";
import axios from 'axios';


const MarsPix = () =>{
const [img, setImg] = useState()

axios.get("https://api.nasa.gov/planetary/apod?api_key=JoTvieccFCqs6LCEFyM9IXJ37FhZV6VT85bPbntg")
.then(response => {
 setImg(response.data.hdurl)
 console.log(response.data.hdurl)

})
.catch(error => {
console.log("The data was not returned", error);
});




return (
<div className = "mainPix">
	<img src = {img} alt= 'mars' height ='200' width ='200'/>
</div>
)

}
export default MarsPix