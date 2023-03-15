import express, { NextFunction, Request, Response } from "express";

import UserService from "../services/user.services";

const router = express.Router();
const service = new UserService();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  try {
    const body = req.body;
    const user = await service.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.json({ error });
  }
});

export default router;
