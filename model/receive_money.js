const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_money', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "người yêu cầu rút tiền"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Số tiền muốn rút"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "STK ngân hàng"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0: chờ duyệt; 1: duyệt; 2: Từ chối"
    }
  }, {
    sequelize,
    tableName: 'receive_money',
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
        name: "receive_money_customer_id_index",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "receive_money_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
