import client from "./client";

const login = (email, password) => client.post("/login", { email, password });
const logout = () => client.post("/logout");

const authApi = { login, logout };

export default authApi;
