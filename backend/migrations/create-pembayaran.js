'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayaran', {
      id_pembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'petugas',
          key: 'id_petugas'
        }
      },
      nisn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'siswa',
          key: 'nisn'
        }
      },
      tgl_bayar: {
        type: Sequelize.DATE
      },
      id_spp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'spp',
          key: 'id_spp'
        }
      },
      jumlah_bayar: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pembayaran');
  }
};