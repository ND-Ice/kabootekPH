import client from "./client";

const getServicesData = () => client.get("/service");
const AddService = (service) => client.post("/service", service);
const updateService = (service, id) => client.put(`/service/${id}`, service);
const deleteService = (id) => client.delete(`/service/${id}`);

const servicesApi = {
  getServicesData,
  AddService,
  updateService,
  deleteService,
};

export default servicesApi;
