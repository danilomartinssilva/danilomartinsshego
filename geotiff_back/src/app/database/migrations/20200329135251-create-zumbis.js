'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('zumbis',

      {
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
        avatar: {
          type: Sequelize.STRING,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,

        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,

        }



      });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('zumbis');
  }
};
