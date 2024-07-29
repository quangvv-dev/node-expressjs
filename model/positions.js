const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id phòng ban"
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Tên chức vụ"
    }
  }, {
    sequelize,
    tableName: 'positions',
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
