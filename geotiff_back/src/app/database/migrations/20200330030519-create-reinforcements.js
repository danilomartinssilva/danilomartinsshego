'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.createTable('reinforcements', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      zumbi_id: {
        type: Sequelize.INTEGER,
        references: { model: 'zumbis', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      avatar_url: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('reinforcements');

  }
};
