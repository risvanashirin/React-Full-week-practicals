import { useEffect, useRef, useState } from "react";

export default function PreviousValueTracking() {
  const [count, setCount] = useState(0);

  const prevRef = useRef(null);       
  const [prevValue, setPrevValue] = useState(null); 

  useEffect(() => {
    setPrevValue(prevRef.current);  
    prevRef.current = count;       
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevValue}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
