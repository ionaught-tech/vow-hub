import { Response } from "express";

const response = (
  res:Response,
  code:number,
  status:boolean,
  message:string,
  data:object
  ) =>
  res.status(code).send({
    status,
    message,
    data,
  });

export const badRequest = (res:Response, message:string, data:object) =>
  response(res, 400, false, message, data);

export const successResponse = (res:Response, data:object, message:string) =>
  response(res, 200, true, message, data);

export const serverError = (res:Response, message:string, data:object) =>
  response(res, 500, false, message, data);

export const unauthorizedError = (res:Response, data:object) =>
  response(res, 401, false, "Unauthorized", data);

export const notFoundError = (res:Response, data:object) =>
  response(res, 404, false, "Not Found", data);

export default {
  badRequest,
  successResponse,
  serverError,
  unauthorizedError,
  notFoundError,
};
