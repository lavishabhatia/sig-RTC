import { Router } from "express"

import checkAuthToken from "../../globals/middlewares/auth.middleware.js";

import * as  controller from "./controller.js";

export default () => {
    const router = Router();

    router.use(...checkAuthToken({ blockOnError: true }));

    router.post("/create", controller.create)
    router.get("/", controller.getAppInfo)

    return router;
}
