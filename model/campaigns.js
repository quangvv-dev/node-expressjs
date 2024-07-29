const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "tên chiến dịch"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customer_status: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "trạng thái khách hàng"
    },
    from_order: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ngày phát sinh đơn hàng"
    },
    to_order: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ngày kết thúc phát sinh đơn hàng"
    },
    branch_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sale_id: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaigns',
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
