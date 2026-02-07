import { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <>
      <h2>{on ? "ON" : "OFF"}</h2>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </>
  );
}
export default Toggle