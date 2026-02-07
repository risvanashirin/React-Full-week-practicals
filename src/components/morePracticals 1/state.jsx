import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)
    const inc=()=>setCount(i=>i+1)
    const dec=()=>setCount(i=>i-1)
    const reset=()=>setCount(0)


    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}


export default Counter