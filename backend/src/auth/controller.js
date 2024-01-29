import bcrypt from "bcrypt";

import ApiResponse from "../../globals/utils/api-response.js";
import { requestHandler } from "../../globals/utils/request-handler.js";
import * as jwt from "../../globals/config/jsonwebtoken.js";

import User from "./schema.js";
import * as validators from "./validators.js"
import * as utils from "./utils.js";

export const register = requestHandler(async (req, res, next) => {
    const { email, password } = validators.register.parse(req.body);

    const isExists = await User.findOne({ email: email }).lean();

    if (isExists) {
        return res.status(400).json(new ApiResponse({ status: 400, message: "User already registered." }))
    }

    const newUser = new User({ email: email, password: await utils.generateHash(password) });

    await newUser.save();

    return res.status(201).json(new ApiResponse({
        status: 201, message: "User registered successfully.", data: {
            jwt: jwt.sign({ id: newUser._id })
        }
    }))
})

export const login = requestHandler(async (req, res, next) => {
    const { email, password } = validators.register.parse(req.body);

    const isExists = await User.findOne({ email: email }).lean();

    if (!isExists) {
        return res.status(401).json(new ApiResponse({ status: 400, message: "Invalid Credentials" }))
    }

    const isAuthenticated = await bcrypt.compare(password, isExists.password);

    if (!isAuthenticated) {
        return res.status(401).json(new ApiResponse({ status: 400, message: "Invalid Credentials" }))
    }

    return res.status(200).json(new ApiResponse({
        status: 200, message: "User logged in successfully.", data: {
            jwt: jwt.sign({ id: isAuthenticated._id })
        }
    }))
})
