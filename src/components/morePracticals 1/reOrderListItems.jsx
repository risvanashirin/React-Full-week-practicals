// Reorder using buttons (Move Up / Down)
// We swap positions with previous item.
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["A", "B", "C", "D"]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  const moveDown = (index) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    setItems(newItems);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Reorder List</h2>

      {items.map((item, i) => (
        <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
          <span style={{ width: 30 }}>{item}</span>

          <button onClick={() => moveUp(i)} disabled={i === 0}>
            ⬆ Up
          </button>

          <button onClick={() => moveDown(i)} disabled={i === items.length - 1}>
            ⬇ Down
          </button>
        </div>
      ))}

      <hr />
      <p>Current Order: {items.join(" , ")}</p>
    </div>
  );
}
