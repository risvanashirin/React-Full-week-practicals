import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs only when count changes:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
    </>
  );
}
