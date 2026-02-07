

export default function App() {
  const users = [
    { id: 1, name: "Risu", age: 22 },
    { id: 2, name: "Ameen", age: 24 },
    { id: 3, name: "Sara", age: 21 }
  ];

  return (
    <>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
