import { useState } from "react";

function App() {
  const [items, setItems] = useState([])

  function addItem() {
    console.log("Button clicked")
    setItems([...items, "Apple"])
  }

  console.log("Current items:", items);

  return (
    <>
      <button onClick={addItem}>Add Item</button>

      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
}

export default App;
