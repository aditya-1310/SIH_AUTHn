import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();
export const mailtrapClient = new MailtrapClient({
  token: process.env.TOKENMAILTRAP,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Aditya",
};


