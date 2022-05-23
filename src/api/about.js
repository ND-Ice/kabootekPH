import client from "./client";

const getAboutData = () => client.get("/about");
const addAboutData = (aboutData) => client.post("/about", aboutData);
const updateAbout = (aboutData, id) => client.put(`/about/${id}`, aboutData);

const aboutApi = { getAboutData, addAboutData, updateAbout };

export default aboutApi;
