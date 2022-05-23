import client from "./client";

const getHomeData = () => client.get("/home");
const addHomeData = (homedata) => client.post("/home", homedata);
const updateImage = (image, id) => client.put(`/home/${id}`, { image });
const updateTitle = (title, id) => client.put(`/home/${id}`, { title });
const updateDescription = (description, id) =>
  client.put(`/home/${id}`, { description });

const homeApi = {
  getHomeData,
  addHomeData,
  updateImage,
  updateTitle,
  updateDescription,
};

export default homeApi;
