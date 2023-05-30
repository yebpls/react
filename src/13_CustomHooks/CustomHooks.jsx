import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
import useWindowSize from "./useWindowSize";
import axios from "axios";
import useRequest from "./useRequest";

function CustomHooks() {
  const { count, increase, decrease } = useCounter();
  const size = useWindowSize();

  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          userId: searchTerm || undefined,
        },
      }
    );
    return data;
  };
  const {
    data: todos = [],
    isLoading,
    error,
  } = useRequest(fetchData, { depedencies: [searchTerm] });

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div>
      <h1>CustomHooks</h1>
      <hr />
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <hr />
      {size.width >= 768 && <h1>Sidebar</h1>}
      <hr />
      <input placeholder="Search" onChange={handleChange} />
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default CustomHooks;
