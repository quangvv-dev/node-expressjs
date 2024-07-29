const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Tên KH"
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Email"
    },
    note: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "ghi chu"
    },
    post_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "bài đăng"
    },
    telesales_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Người phụ trách"
    },
    group: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Nhóm khách hàng"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: chưa gọi, 1: đã gọi , 2: đã đến"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    }
  }, {
    sequelize,
    tableName: 'customer_posts',
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
