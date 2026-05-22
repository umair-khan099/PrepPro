import mongoose from "mongoose";
import CONFIG from "../config/dotenv.config.js";

const dbConnect = async () => {
  try {
    const response = await mongoose.connect(CONFIG.MONGO_URI as string, {
      dbName: "PrepPro",
    });
    console.log(
      `Server has connected successfully ${response.connection.host}`,
    );
  } catch (error) {
    console.log(error || "Somthing went wrong at db Connection");
    process.exit(1);
  }
};

export default dbConnect;
