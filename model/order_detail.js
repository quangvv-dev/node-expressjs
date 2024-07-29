const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bill_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percent_discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Buổi liệu trình"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Mã sản phẩm"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    }
  }, {
    sequelize,
    tableName: 'order_detail',
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
        name: "order_detail_booking_id_index",
        using: "BTREE",
        fields: [
          { name: "booking_id" },
        ]
      },
      {
        name: "order_detail_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "order_detail_order_id_index",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
