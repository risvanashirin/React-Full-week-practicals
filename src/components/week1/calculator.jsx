import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
        <button onClick={() => setResult(num1 - num2)} style={{ marginLeft: "5px" }}>-</button>
        <button onClick={() => setResult(num1 * num2)} style={{ marginLeft: "5px" }}>*</button>
        <button onClick={() => setResult(num1 / num2)} style={{ marginLeft: "5px" }}>/</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
