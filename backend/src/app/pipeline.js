import ServerError from "../../globals/utils/server-error";

import User from "../auth/schema"
import App from "./schema";

export const isAppUser = async (userId, appId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new ServerError("Invalid user.", 400);
    }

    const app = await App.findOne({ appId });

    if (app.user === user.id) {
        return {
            user, app
        }
    }

    else {
        throw new ServerError(`No app exists or ${appId} doesn't belongs  to you `, 400);
    }
}
