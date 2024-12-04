import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = actions;

  const incrementHandler = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  return (
    <div>
      {state.count}
      <button onClick={incrementHandler}>Tambah</button>
      <button onClick={decrementHandler}>Kurang</button>
    </div>
  );
};

export default Reducer;
