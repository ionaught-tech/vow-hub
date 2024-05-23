import { unauthorizedError,badRequest} from "../Http"
import {verifyToken} from "../Generator";
import { getErrorDetails } from "../Map";
import { NextFunction, Request, Response } from "express";

const joiValidateMiddleware = (schema:any)=>(req:Request, res:Response, next:NextFunction) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) return badRequest(res, "Bad Request", getErrorDetails(error));
  next();
};

const authMiddleware = (permission:string) => async (req:any, res:Response, next:NextFunction) => {
  if (!req.headers.authorization)
    return unauthorizedError(res, {
      error: "No authorization header found",
    });

  const token = req.headers.authorization.split(" ")[1];
  if (!token)
    return unauthorizedError(res, {
      error: "No token found",
    });

  try {
    const decoded = await verifyToken(token);

    if (!decoded.permissions.includes(permission)) {
      return unauthorizedError(res, {
        error: "You don't have permission to access this resource",
      });
    }
    req.user = decoded;
    return next();
  } catch (error) {
    return unauthorizedError(res, {
      error: "Invalid token!",
    });
  }
};



export default {
  joiValidateMiddleware,
  authMiddleware,
};
