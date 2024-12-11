import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/fetch";

const DetailProduct = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  //   console.log(product.data);
  if (isError) return <h1>Error Product {id}</h1>;
  if (isLoading) return <h1>Loading get product {id}</h1>;
  console.log(data);

  return (
    <div>
      <img src={data.image} />
      <p>{data.title}</p>
      <p>{data.price}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default DetailProduct;
