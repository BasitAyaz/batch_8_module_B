import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    list.push(text);
    setList([...list]);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>

      {list.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </div>
  );
}

export default App;
