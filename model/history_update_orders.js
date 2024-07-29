const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_update_orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Người thực hiện",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    support_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Người trợ giúp"
    },
    support2_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "người trợ giúp 2"
    },
    tip_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "thủ thuât thực hiện"
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Đơn hàng",
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ID dich vu"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "loai tru lieu trinh"
    },
    description: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Note"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Sao đánh giá"
    },
    comment_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Đánh giá của khách hàng"
    }
  }, {
    sequelize,
    tableName: 'history_update_orders',
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
        name: "history_update_orders_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "history_update_orders_order_id_foreign",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "history_update_orders_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
    ]
  });
};
