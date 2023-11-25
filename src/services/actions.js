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

export const getByYear = async (year) => {
  try {
    const response = await api.get(`/year/${year}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting images for that year: ", error);
  }
};

export const createImage = async (imageData) => {
  try {
    const response = await api.post("/", imageData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
