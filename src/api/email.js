import client from "./client";

const getEmailData = () => client.get("/emails");
const addEmail = (email) => client.post("/emails", email);
const updateEmail = (email, id) => client.put(`/emails/${id}`, email);
const deleteEmail = (id) => client.delete(`/emails/${id}`);

const emailApi = { getEmailData, addEmail, updateEmail, deleteEmail };

export default emailApi;
