import { Response } from "express";

const response = (
  res: Response,
  code: number,
  status: boolean,
  message: string,
  data: unknown,
) =>
  res.status(code).send({
    status,
    message,
    data,
  });

export const badRequest = (res: Response, message: string, data: unknown) =>
  response(res, 400, false, message, data);

export const successResponse = (
  res: Response,
  message: string,
  data: unknown,
) => response(res, 200, true, message, data);

export const serverError = (res: Response, message: string, data: unknown) =>
  response(res, 500, false, message, data);

export const unauthorizedError = (res: Response, data: unknown) =>
  response(res, 401, false, "Unauthorized", data);

export const notFoundError = (res: Response, data: unknown) =>
  response(res, 404, false, "Not Found", data);

export default {
  badRequest,
  successResponse,
  serverError,
  unauthorizedError,
  notFoundError,
};
