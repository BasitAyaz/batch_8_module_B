import { useState } from "react";
import SMButton from "./components/SMButton";
import SMCard from "./components/SMCard";
import SMSelect from "./components/SMSelect";

export default function App() {
  const [gender, setGender] = useState();

  return (
    <>
      <div>
        <h1>Components</h1>

        <SMSelect
          getValue={(e) => {
            console.log("App.js", e);
          }}
          label="Gender"
          options={[
            {
              value: "male",
              displayName: "Male",
            },
            {
              value: "female",
              displayName: "Female",
            },
          ]}
        />
      </div>
    </>
  );
}

// Create a component of Card which takes data in props
// Create a list of users containing properties id,name,age,institute,isActive
// play Map of this list and render data in cards.
