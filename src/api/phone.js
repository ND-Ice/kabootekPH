import client from "./client";

const getPhoneData = () => client.get("/phones");
const addPhone = (phone) => client.post("/phones", phone);
const updatePhone = (phone, id) => client.put(`/phones/${id}`, phone);
const deletePhone = (id) => client.delete(`/phone/${id}`);

const phoneApi = { getPhoneData, addPhone, updatePhone, deletePhone };

export default phoneApi;
