const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nhân viên"
    },
    title: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Tiêu đề thông báo"
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Data"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Loại thông báo"
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "id công việc nếu có"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Trạng thái 0: Ẩn; 1:chưa đọc; 2: đã đọc"
    }
  }, {
    sequelize,
    tableName: 'notifications',
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
