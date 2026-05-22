import app from "./app.js";
import CONFIG from "./config/dotenv.config.js";
import dbConnect from "./db/dbConnect.js";

await dbConnect();
app.listen(CONFIG.PORT, () => {
  console.log(`Server is running at PORT : ${CONFIG.PORT}`);
});
