import mongoose, { Schema } from "mongoose";
import database from "../../globals/config/database.js";

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    apps: {
        type: [mongoose.Types.ObjectId],
    },
}, { timestamps: true });

const User =  database.model("User", schema);

export default User;
