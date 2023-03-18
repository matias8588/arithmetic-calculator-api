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
      amount: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.UUID,
        field: 'user_id',
        reference: {
          model: USER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      recordId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'record_id',
        reference: {
          model: RECORD_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.createTable(RECORD_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      userId: {
        type: Sequelize.DataTypes.UUID,
        field: 'user_id',
        allowNull: false,
        reference: {
          model: USER_TABLE,
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
        type: Sequelize.DataTypes.INTEGER,
        field: 'user_balance',
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
