import client from "./client";

const getThemes = () => client.get("/newtheme");
const addTheme = (theme) => client.post("/newtheme", theme);
const updateTheme = (theme, id) => client.put(`/newtheme/${id}`, theme);
const deleteTheme = (id) => client.delete(`/newtheme/${id}`);
const activateTheme = (id) => client.patch(`/newtheme/activate/${id}`);

const themeApi = {
  getThemes,
  addTheme,
  updateTheme,
  deleteTheme,
  activateTheme,
};
export default themeApi;
