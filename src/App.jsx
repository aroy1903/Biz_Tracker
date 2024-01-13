import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{count}</h1>
      <button className=" text-3xl" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
