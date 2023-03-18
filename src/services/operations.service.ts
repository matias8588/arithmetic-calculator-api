import boom from '@hapi/boom';

import { models } from '../lib/sequelize';

class OperationsService {
  async find(query: any) {
    const options: any = {
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { type } = query;
    if (type) {
      options.where.type = type;
    }

    const operations = await models.Operation.findAll(options);
    return operations;
  }

  async create(data: any) {
    const operation = await models.Operation.create(data);
    return operation;
  }
}

export default OperationsService;
