import { useRef, useState } from "react";

export default function App() {
  const countRef = useRef(0);
  const [render, setRender] = useState(0);

  function increase() {
    countRef.current++;
    console.log("Ref value:", countRef.current);
  }

  return (
    <>
      <button onClick={increase}>Increase Ref</button>
      <button onClick={() => setRender(render + 1)}>Re-render</button>
    </>
  );
}
