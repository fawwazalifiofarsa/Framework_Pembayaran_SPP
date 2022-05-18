'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pembayaran,{
        foreignKey: "id_siswa"
      })
      this.belongsTo(models.kelas,{
        foreignKey: "id_kelas"
      })
    }
  }
  siswa.init({
    nisn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nis: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    id_kelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
  });
  return siswa;
};