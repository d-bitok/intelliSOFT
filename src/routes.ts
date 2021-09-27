import { Express, Request, Response } from "express";
import validateRequest from "./middleware/validateRequest";
import {  createUserSchema } from "./schema/user.schema";
import { createUserHandler } from "./controller/user.controller";
export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    // Register User
    // POST /api/user
    // app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

    // Login
    // POST /api/sessions

    // Get the User's Sessions
    // GET /api/sessions

    // Logout
    // DELETE /api/sessions
}