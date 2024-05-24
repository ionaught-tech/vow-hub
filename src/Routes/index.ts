import { Request, Router, Response } from "express";
import {
    badRequest,
    notFoundError,
    serverError,
    successResponse,
    unauthorizedError,
} from "../Utils";
import { Users } from "../Types/api-contract";

const router = Router();

type CustomResponse<T, E = unknown> = Response & {
    success: (message: string, data: T) => void;
    badRequest: (message: string, data: E) => void;
    unauthorizedError: (message: string, data: unknown) => void;
    notFoundError: (message: string, data: unknown) => void;
    serverError: (message: string, data: unknown) => void;
};

type Handler<T> = (req: Request, res: CustomResponse<T>) => void;

router.use((_req, res: CustomResponse<unknown>, next) => {
    res.success = (message: string, data: unknown) =>
        successResponse(res, message, data);
    res.badRequest = (message: string, data: unknown) =>
        badRequest(res, message, data);
    res.notFoundError = (data: unknown) => notFoundError(res, data);
    res.unauthorizedError = (data: unknown) => unauthorizedError(res, data);
    res.serverError = (message: string, data: unknown) =>
        serverError(res, message, data);
    next();
});

const handler: Handler<Users> = (_req, res) => {
    const users = [{ name: "Hello", age: 18 }]
    res.success("Ok", users);
};


router.get("/", handler);

export default router;
