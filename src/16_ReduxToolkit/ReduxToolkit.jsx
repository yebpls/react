import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slices/countSlice";
import { getUser } from "../slices/userSlice";

function ReduxToolkit() {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const handleIncrementAmount = () => {
    const number = +prompt("Input number");
    dispatch(incrementByAmount(number));
  };

  const handleFindUser = () => {
    const username = prompt("Input username");
    dispatch(getUser(username));
  };

  return (
    <div>
      <h1>ReduxToolkit</h1>

      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={handleIncrementAmount}>Increment by amount</button>

      <hr />

      <button onClick={handleFindUser}>Find User</button>
    </div>
  );
}

export default ReduxToolkit;
