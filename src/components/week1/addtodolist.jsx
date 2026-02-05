import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add to List</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
