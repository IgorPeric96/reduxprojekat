import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../store/counter/selectors";
import { decrement, increment, reset } from "../store/counter/slice";

function Counter() {
  //   const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const counterValue = useSelector(counterSelector);

  const [addAmount, setAddAmount] = useState("");

  const [amountToAdd, setAmountToAdd] = useState("");

  const handleIncrement = () => {};

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const reset = () => {
  //     setCount(0);
  //   };

  //   const addAmountToCount = () => {
  //     setCount((prevCount) => prevCount + Number(addAmount));

  //     setAddAmount("");
  //   };

  //   const handleInputChange = (e) => {
  //     setAddAmount(e.target.value);
  //   };

  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <input
        type="text"
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(Number)}
      />
      <button
        onClick={() => {
          dispatch(addAmount());
        }}
      >
        Add Amount
      </button>
    </div>
  );
}

export default Counter;
