import express from "express";
import usersRouter from "./users.routes";
import { Express } from "express-serve-static-core";

function routerApi(app: Express) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
}

export default routerApi;
