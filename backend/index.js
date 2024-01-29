import exhancer, { mongoError, zodError } from "exhancer"

// import media from "@exhancer/media"

import express from "express";
import cors from "cors"

import * as path from "path";
import * as  url from "url";

import * as jwtError from "./globals/plugin/errors/jwtError.js";
import * as serverError from "./globals/plugin/errors/serverError.js"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const exhapp = new exhancer.Exhancer({ fsRouting: true, directory: path.resolve(__dirname, "src") });

const { app } = exhapp;

// app.use(media());

app.use(express.json());
app.use(cors());

exhapp.onError([mongoError, zodError, jwtError, serverError]);

exhapp.run(3000, () => {
    console.log("[sigRTC] ⚡ App Running on port 3000");
});