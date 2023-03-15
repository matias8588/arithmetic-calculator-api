import { Model, DataTypes, Sequelize } from 'sequelize';

const OPERATION_TABLE = 'operation';

const OperationSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  cost: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.fn('NOW'),
  },
};

class Operation extends Model {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: OPERATION_TABLE,
      modelName: 'Operation',
      timestamps: false,
    };
  }
}

export { OPERATION_TABLE, OperationSchema, Operation };
