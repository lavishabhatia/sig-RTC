import { Router } from "express";

import * as controller from "./controller.js"

export default () => {
    const router = Router();

    router.post("/register", controller.register)
    router.post("/login", controller.login)

    return router;
}

