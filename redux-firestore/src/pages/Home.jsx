import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../redux/action";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
  };

  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div className="p-3">
      <div className="grid grid-cols-5 gap-3">
        {data?.map((product) => {
          const { id, name, image, price, stock } = product;
          return (
            <div key={id} className="shadow">
              <div className="w-full">
                <img src={image} alt="img" />
              </div>
              <div className="p-3">
                <p className="text-md font-medium">{name}</p>
                <p className="text-xl font-bold text-blue-700">Rp. {price}</p>
                <p className="text-sm">Stocks: {stock} pcs</p>
              </div>
              <div className="bg-gray-50">
                <button
                  onClick={() => deleteHandler(id)}
                  className="rounded-md py-2 px-3 bg-red-500 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
