import bcrypt from "bcrypt";

import { models } from "../lib/sequelize";

interface IData {
  password: string;
  email: string;
  isActive: boolean;
}
class UserService {
  constructor() {}

  async create(data: IData) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({ ...data, password: hash });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }
}

export default UserService;
