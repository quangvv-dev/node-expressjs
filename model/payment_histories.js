const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_histories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Số tiền thanh toán"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ghi chú"
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
    is_debt: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "thanh toán nợ"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    }
  }, {
    sequelize,
    tableName: 'payment_histories',
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
      {
        name: "payment_histories_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "payment_histories_order_id_index",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "payment_histories_payment_type_index",
        using: "BTREE",
        fields: [
          { name: "payment_type" },
        ]
      },
      {
        name: "payment_histories_payment_date_index",
        using: "BTREE",
        fields: [
          { name: "payment_date" },
        ]
      },
    ]
  });
};
