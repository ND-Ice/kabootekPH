import client from "./client";

const sendMail = (values) => client.post("/send-email", values);

const mailerApi = { sendMail };

export default mailerApi;
