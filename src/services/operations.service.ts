import boom from '@hapi/boom';

import { models } from '../lib/sequelize';

class OperationsService {
  constructor() {}

  async find() {
    const operations = await models.Operation.findAll();
    return operations;
  }

  async create(data: any) {
    const operation = await models.Operation.create(data);
    return operation;
  }

  async findOne(id: string) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }
}

export default OperationsService;
