'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.petugas,{
        foreignKey: "id_petugas"
      })
      this.belongsTo(models.siswa,{
        foreignKey: "nisn"
      })
      this.belongsTo(models.spp,{
        foreignKey: "id_spp"
      })
    }
  }
  pembayaran.init({
    id_pembayaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_petugas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nisn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_bayar: DataTypes.DATE,
    id_spp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah_bayar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
    tableName: 'pembayaran'
  });
  return pembayaran;
};