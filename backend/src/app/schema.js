import mongoose, { Schema } from "mongoose";

import * as appConfig from "../../globals/config/app.config.js";
import database from "../../globals/config/database.js";

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

    type: {
        enum: appConfig.config.app.types,
        type: String,
        required: true
    },
    appId: {
        type: String,
        unique: true,
        required: true
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const App = database.model("apps", schema);

export default App;