import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action";

const BasicRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
    </div>
  );
};

export default BasicRedux;
