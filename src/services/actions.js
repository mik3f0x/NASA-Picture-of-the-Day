import api from "./apiConfig";

export const getAll = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all images: ", error);
  }
};

export const getOne = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting Image: ", error);
  }
};
