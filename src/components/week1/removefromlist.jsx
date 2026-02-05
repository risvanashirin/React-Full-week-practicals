
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

  const removeItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add & Remove List</h1>

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
          <li key={index}>
            {value}
            <button
              onClick={() => removeItem(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
