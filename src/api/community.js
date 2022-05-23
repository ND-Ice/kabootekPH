import client from "./client";

const getCommunityLinks = () => client.get("/community");
const addCommunityLinks = (community) => client.post("/community", community);
const updateCommunityLinks = (community, id) =>
  client.put(`/community/${id}`, community);
const deleteCommunityLinks = (id) => client.delete(`/community/${id}`);

const communityApi = {
  getCommunityLinks,
  addCommunityLinks,
  updateCommunityLinks,
  deleteCommunityLinks,
};

export default communityApi;
