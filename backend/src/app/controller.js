import { requestHandler } from "../../globals/utils/request-handler.js";
import * as config from "../../globals/config/app.config.js"

import * as utils from "./utils.js";
import * as validator from "./validators.js";

import App from "./schema.js";
import ServerError from "../../globals/utils/server-error.js";
import ApiResponse from "../../globals/utils/api-response.js";

export const create = requestHandler(async (req, res, next) => {
    const { name, type } = validator.create.parse(req.body);

    if (!config.config.app.types.includes(type)) {
        throw new ServerError(`type must be one of ${config.config.app.types}`, 422);
    }

    const newApp = new App({ name: name, type: type, appId: utils.generateAppId(name), })

    await newApp.save();

    res.status(201).json(new ApiResponse({ status: 201, message: "App created successfully" }))
})