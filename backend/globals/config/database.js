import mongoose from "mongoose";
import { config } from "dotenv";

config();

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
    throw new Error("Can't start app withour DATABASE_URL")
}

const database = mongoose.createConnection(DATABASE_URL);

export default database;