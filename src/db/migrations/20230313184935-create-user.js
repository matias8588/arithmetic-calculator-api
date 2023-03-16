'use strict';

const { USER_TABLE } = require('./../models/user.models.js');
const { OPERATION_TABLE } = require('./../models/operation.models.js');
const { RECORD_TABLE } = require('./../models/record.models.js');

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
        field: 'is_active',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
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
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'user_id',
        unique: true,
        reference: {
          model: USER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
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
        field: 'operation_id',
        reference: {
          model: OPERATION_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      amount: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      userBalance: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'user_balance',
      },
      operationResponse: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'operation_response',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
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
