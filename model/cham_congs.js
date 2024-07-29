const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cham_congs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name_machine: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    machine_number: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    date_time_record: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ind_red_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:chấm tay, 1:đơn"
    },
    approval_code: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "mã chấm công"
    }
  }, {
    sequelize,
    tableName: 'cham_congs',
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
        name: "cham_congs_approval_code_index",
        using: "BTREE",
        fields: [
          { name: "approval_code" },
        ]
      },
      {
        name: "cham_congs_date_time_record_index",
        using: "BTREE",
        fields: [
          { name: "date_time_record" },
        ]
      },
    ]
  });
};
