import SMButton from "./components/SMButton";
import SMCard from "./components/SMCard";

export default function App() {
  let testing = () => {
    console.log("Testing");
  };

  let users = [
    {
      id: 1,
      name: "ABC",
      age: 18,
      isActive: true,
    },
    {
      id: 2,
      name: "JKL",
      age: 18,
      isActive: true,
    },
    {
      id: 3,
      name: "TYU",
      age: 18,
      isActive: true,
    },
    {
      id: 4,
      name: "OPO",
      age: 18,
      isActive: true,
    },
  ];

  return (
    <>
      <div>
        <h1>Components</h1>
        {users.map((x, i) => {
          return (
            <SMCard id={x.id} name={x.name} age={x.age} isActive={x.isActive} />
          );
        })}
      </div>
    </>
  );
}

// Create a component of Card which takes data in props
// Create a list of users containing properties id,name,age,institute,isActive
// play Map of this list and render data in cards.
