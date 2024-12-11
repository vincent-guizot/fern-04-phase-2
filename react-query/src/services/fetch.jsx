import axios from "axios";

const URL = "http://localhost:3000/products";

export const getProducts = async () => {
  const response = await axios({
    method: "GET",
    url: URL,
  });

  return response.data;
};
export const getProductById = async (id) => {
  const response = await axios({
    method: "GET",
    url: URL + `/${id}`,
  });
  console.log(response.data);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios({
    method: "POST",
    url: URL,
    data: product,
  });

  return response.data;
};

export const updateProduct = async ({ id, product }) => {
  const response = await axios({
    method: "PUT",
    url: URL + `/${id}`,
    data: product,
  });

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: URL + `/${id}`,
  });

  //   console.log(id);
  return response.data;
};
