 import { useState } from "react";

 function Name(){
   const [name,setName]=useState('')
   
   return (
    <>
    <input onChange={(e)=>setName(e.target.value)}/>
    <h1>Name is {name}</h1>
    </>
   )
 }
 export default Name