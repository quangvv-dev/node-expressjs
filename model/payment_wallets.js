const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_wallets', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_wallet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Đơn nạp"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Số tiền thanh toán"
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Ngày thanh toán"
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Kiểu thanh toán"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ghi chú"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Chi nhánh"
    }
  }, {
    sequelize,
    tableName: 'payment_wallets',
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
        name: "payment_wallets_order_wallet_id_index",
        using: "BTREE",
        fields: [
          { name: "order_wallet_id" },
        ]
      },
      {
        name: "payment_wallets_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
    ]
  });
};
