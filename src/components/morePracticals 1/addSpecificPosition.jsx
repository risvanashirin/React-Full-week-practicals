import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["A", "B", "C"]);

  function addStart() {
  setItems(["X", ...items]);
}
function addEnd() {
  setItems([...items, "X"]);
}
function addMiddle() {
  const index = 1;

  setItems([
    ...items.slice(0, index),
    "X",
    ...items.slice(index)
  ]);
}

  return (
    <>
      <h2>{items.join(" , ")}</h2>

      <button onClick={() => addStart()}>Add at Start</button>
      <button onClick={() => addMiddle()}>Add in Middle</button>
      <button onClick={() => addEnd()}>Add at End</button>
    </>
  );

}
