"use strict";

const { USER_TABLE } = require("./../models/user.models");
const { OPERATION_TABLE } = require("./../models/operation.models");
const { RECORD_TABLE } = require("./../models/record.models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      isActive: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: true,
        field: "is_active",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(OPERATION_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      type: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      cost: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(RECORD_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      operationId: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        field: "operation_id",
        reference: {
          model: OPERATION_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      amount: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      userBalance: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: "user_balance",
      },
      operationResponse: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: "operation_response",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(OPERATION);
    await queryInterface.dropTable(RECORD_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
