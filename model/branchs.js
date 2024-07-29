const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branchs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Chi nhánh"
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Số điện thoại"
    },
    address: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Địa chỉ"
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1: Miền Bắc, 2: Miền Trung, 3: Miền Nam"
    },
    name_machine: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Mã máy chấm công chi nhánh"
    },
    lat: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branchs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
