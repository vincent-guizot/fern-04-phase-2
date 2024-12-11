import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { createProduct } from "../services/fetch";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://placehold.co/100",
    category: "clothing",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    createMutation.mutate(formData);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="border p-3"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          type="text"
          placeholder="Product title"
        ></input>
        <input
          className="border p-3"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          type="number"
          placeholder="Product price"
        ></input>
        <button
          className="rounded-md px-3 py-1 bg-green-500 hover:bg-green-700"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
