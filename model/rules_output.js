const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rules_output', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    event: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    category_id: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Nhóm DV"
    },
    action: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    configs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'rules_output',
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
