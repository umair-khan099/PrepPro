import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = ["PORT", "MONGO_URI"];

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} is missing in .env file`);
  }
});

const CONFIG = {
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI,
};

export default CONFIG;
