const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_banks', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    bank_code: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "mã ngân hàng"
    },
    account_number: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "số tài khoản"
    },
    account_name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Người thụ hưởng"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_banks',
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
