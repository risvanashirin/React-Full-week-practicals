

export default function App() {
  const users = [
    { id: 1, name: "Risu", age: 22 },
    { id: 2, name: "Thaara", age: 24 },
    { id: 3, name: "Sara", age: 21 }
  ];

  return (
    <>
    <h1>Users List:-</h1>
    { 
    users.map((obj)=>
    <h3> name={obj.name} age={obj.age}</h3>
    )
     }
    </>
  );
}
