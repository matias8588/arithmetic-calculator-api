import bcrypt from 'bcrypt';
import boom from '@hapi/boom';

import { models } from '../lib/sequelize';

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

  async findByEmail(email: string) {
    const rta = await models.User.findOne({
      where: { email },
    });
    return rta;
  }

  async findOne(id: string) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }
}

export default UserService;
