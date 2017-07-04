'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'likes',
      'like-boolean',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'likes',
      'like-boolean'
    )
  }
};
