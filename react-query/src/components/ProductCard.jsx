import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct, updateProduct } from "../services/fetch";

const ProductCard = ({ product }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  const deleteHandler = (id) => {
    alert(id);
    // console.log(deleteMutation);
    deleteMutation.mutate(id);
  };

  const updateHandler = (id) => {
    alert(id);
    let productTemp = {
      ...product,
      rating: {
        rate: 10,
        count: 10,
      },
    };
    // console.log(productTemp);
    updateMutation.mutate({ id, product: productTemp });
  };

  const { id, title, price, description, image } = product;
  return (
    <div className="shadow">
      <div className="">
        <img src={image} />
      </div>
      <div className="p-3">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-2xl font-bold text-blue-700">$ {price}</p>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
      <div className="bg-grey-50 p-3 flex flex-col">
        <button
          onClick={() => deleteHandler(id)}
          className="rounded-md bg-red-500 hover:bg-red-700 text-white px-3 py-1"
        >
          Delete
        </button>
        <button
          onClick={() => updateHandler(id)}
          className="rounded-md bg-gray-500 hover:bg-gray-700 text-white px-3 py-1"
        >
          Update
        </button>
        <Link
          to={`/detail/${id}`}
          className="rounded-md bg-cyan-500 hover:bg-cyan-700 px-3 py-1"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
