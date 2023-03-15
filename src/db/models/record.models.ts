import { Model, DataTypes, Sequelize, ModelStatic } from "sequelize";
import { OPERATION_TABLE } from "./operation.models";

const RECORD_TABLE = "records";

const RecordSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  operationId: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "operation_id",
    unique: true,
    reference: {
      model: OPERATION_TABLE,
      key: "id",
    },
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userBalance: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "user_balance",
  },
  operationResponse: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "operation_response",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("NOW"),
  },
};

class Record extends Model {
  static associate(models: { Operation: ModelStatic<Model<any, any>> }) {
    this.hasOne(models.Operation, {
      as: "Operation",
      foreignKey: "operationId",
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: RECORD_TABLE,
      modelName: "Record",
      timestamps: false,
    };
  }
}

export { RECORD_TABLE, RecordSchema, Record };
