import { useState } from "react";

export default function Toggle(){
  const [on,setOn]=useState(false)
 return(
  <>
  <h1>{on?'ON':'OFF'}</h1>
  <button onClick={()=>setOn(!on)}>Toggle</button>
  </>
 )
}
