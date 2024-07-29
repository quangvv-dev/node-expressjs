const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otps', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Số điện thoại"
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "OTP"
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Số lần gửi otp trong ngày"
    },
    deviceId: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Mã thiết bị"
    }
  }, {
    sequelize,
    tableName: 'otps',
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
