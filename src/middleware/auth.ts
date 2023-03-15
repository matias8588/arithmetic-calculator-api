import { NextFunction, Request, Response } from "express";
import boom from "@hapi/boom";

import AuthService from "../services/auth.service";
import { config } from "../config/config";

const service = new AuthService();

export interface IPayloadToken {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      next(boom.unauthorized());
      return;
    }
    const token: string = req?.headers?.authorization?.split(" ").pop() || "";
    const dataToken: any = service.verify(token, config.secretKey);

    if (!dataToken?.email) {
      next(boom.unauthorized());
      return;
    }
    next();
  } catch (error: any) {
    next(boom.unauthorized(error));
  }
};

const authRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken: string =
      req?.headers?.authorization?.split(" ").pop() || "";

    if (!refreshToken) {
      next(boom.unauthorized());
    }
    next();
  } catch (error: any) {
    next(boom.unauthorized(error));
  }
};

export { auth, authRefreshToken };