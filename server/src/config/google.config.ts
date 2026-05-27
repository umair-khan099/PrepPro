import { google } from "googleapis";
import CONFIG from "./dotenv.config.js";

const GOOGLE_CLIENT_ID = CONFIG.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = CONFIG.GOOGLE_CLIENT_SECRET;

export const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  "postmessage",
);
