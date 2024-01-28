import { useState } from "react";
import Card from './component/Card'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-12">
        <Card />
      </div>

        <button
          className="btn btn-secondary rounded-3xl"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

    </>
  );
}

export default App;
