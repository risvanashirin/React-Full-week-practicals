//Uncontrolled Input (DOM stores value)
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  function showValue() {
    alert(inputRef.current.value);
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={showValue}>Show</button>
    </>
  );
}
// ////////////////////Controlled input (React stores value)
// import { useState } from "react";

// export default function App() {
//   const [text, setText] = useState("");

//   function showValue() {
//     alert(text);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={showValue}>Show</button>
//     </>
//   );
// }
