import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../services/fetch";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <h1>Loading data...</h1>;
  if (isError) return <h1>Error...</h1>;
  //   console.log(products);

  return (
    <div className="my-2">
      <div className="my-2">
        <h1 className="font-bold text-3xl text-blue-700">Products</h1>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default Homepage;
