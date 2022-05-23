import client from "./client";

const getSocialLinks = () => client.get("/social");
const addSocialLinks = (social) => client.post("/social", social);
const updateSocialLinks = (social, id) => client.put(`/social/${id}`, social);
const deleteSocialLinks = (id) => client.delete(`/social/${id}`);

const socialApi = {
  getSocialLinks,
  addSocialLinks,
  updateSocialLinks,
  deleteSocialLinks,
};

export default socialApi;
