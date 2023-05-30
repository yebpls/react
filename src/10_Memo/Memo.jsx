import React, { useState } from "react";
import Child from "./Child";

function Memo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const [numbers, setNumbers] = useState([]);
  const handleAddNumber = () => {
    const number = Math.floor(Math.random() * 100);
    setNumbers([...numbers, number]);
  };

  return (
    <div>
      <h1>Memo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <p>Message: {message}</p>
      <button onClick={() => setMessage("Hello")}>Set Message</button>

      <hr />

      <Child message={message} onAddNumber={handleAddNumber} />
    </div>
  );
}

export default Memo;
