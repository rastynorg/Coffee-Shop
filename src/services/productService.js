import axios from "axios";

const BASE_URL = "https://6a6659c3189fe5869eb68008.mockapi.io/Products";

export const getProducts = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

export const updateProductRating = async ({id, newRating}) => {
  const response = await axios.put(`${BASE_URL}/${id}`, {
    Rating: newRating,
  });
  return response.data;
};
