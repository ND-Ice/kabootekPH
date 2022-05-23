import client from "./client";

const getAddressData = () => client.get("/address");
const addAddress = (address) => client.post("/address", address);
const updateAddress = (address, id) => client.put(`/address/${id}`, address);
const deleteAddress = (id) => client.delete(`/address/${id}`);

const addressApi = { getAddressData, addAddress, updateAddress, deleteAddress };

export default addressApi;
