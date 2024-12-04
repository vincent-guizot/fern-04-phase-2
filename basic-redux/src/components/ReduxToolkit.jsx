import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../redux/counterSlice";

const ReduxToolkit = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      <button onClick={() => dispatch(incrementByValue(5))}>Tambah 5</button>
    </div>
  );
};

export default ReduxToolkit;
