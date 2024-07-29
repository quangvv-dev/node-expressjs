const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallet_histories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    package_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Id gói nạp"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Khách hàng được nạp"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nhân viên nạp"
    },
    order_price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Tiền thu của KH"
    },
    gross_revenue: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Đã thanh toán"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Số tiền nạp"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "chi nhánh"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Từ nguồn (FB,Zalo,Hotline...)"
    }
  }, {
    sequelize,
    tableName: 'wallet_histories',
    timestamps: true,
    paranoid: true,
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
