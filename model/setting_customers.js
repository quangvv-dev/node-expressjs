const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setting_customers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "id người dùng"
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Tên cột"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Trạng thái cột: 0: inactive| 1: active"
    }
  }, {
    sequelize,
    tableName: 'setting_customers',
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
