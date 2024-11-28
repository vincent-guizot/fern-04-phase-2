import React, { useContext } from "react";
import Context from "../../context/Context";

function BasicContext() {
  const { count, setCount } = useContext(Context);

  const tambahHandler = () => {
    setCount((count) => count + 1);
    console.log("tambah");
  };

  const kurangHandler = () => {
    setCount((count) => count - 1);
    console.log("kurang");
  };

  return (
    <>
      <p>BasicContext</p>
      <div>
        <p className="text-3xl font-bold text-amber-700">{count}</p>
        <button
          onClick={tambahHandler}
          className="rounded-md bg-slate-700 text-white px-3 py-1"
        >
          Tambah
        </button>
        <button
          onClick={kurangHandler}
          className="rounded-md bg-slate-700 text-white px-3 py-1"
        >
          Kurang
        </button>
      </div>
    </>
  );
}

export default BasicContext;
