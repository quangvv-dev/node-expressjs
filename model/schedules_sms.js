const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedules_sms', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "số điện thoại khách hàng"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Nội dung"
    },
    exactly_value: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Thời gian bắn tin"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1: đã bắn 0: chưa bắn"
    },
    status_customer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "trạng thái khách hàng"
    }
  }, {
    sequelize,
    tableName: 'schedules_sms',
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
