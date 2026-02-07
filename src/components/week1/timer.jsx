// import { useState, useEffect } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Timer</h1>
//       <h2>{seconds} sec</h2>

//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
//         Stop
//       </button>
//       <button
//         onClick={() => {
//           setSeconds(0);
//           setRunning(false);
//         }}
//         style={{ marginLeft: "10px" }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;




////////////////////////////////////////////////////    


import { useEffect, useState } from "react"

function Timer(){
  const [seconds,setSeconds]=useState(0)
  useEffect(()=>{

    const intervalId=setInterval(()=>{
       setSeconds(prev=>prev+1) 
    },1000)
    return()=> clearInterval(intervalId)
  },[])
    return(
        <>
       <h1>Timer:-{seconds}</h1> 
        
        </>
    )
}
export default Timer










