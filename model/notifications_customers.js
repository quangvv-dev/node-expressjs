const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications_customers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Khách hàng"
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Trạng thái 0: Ẩn; 1:chưa đọc; 2: đã đọc"
    }
  }, {
    sequelize,
    tableName: 'notifications_customers',
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
      {
        name: "notifications_customers_customer_id_index",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "notifications_customers_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
