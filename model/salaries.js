const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    approval_code: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    all_total: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "tổng tiền"
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "bảng lương chi tiết"
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    history_import_salary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "lịch sử import"
    }
  }, {
    sequelize,
    tableName: 'salaries',
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
