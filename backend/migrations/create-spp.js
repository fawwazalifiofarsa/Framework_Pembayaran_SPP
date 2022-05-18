'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spp', {
      id_spp: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      nominal: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spp');
  }
};