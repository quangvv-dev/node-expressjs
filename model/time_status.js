const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "time_status_status_id_unique"
    },
    expired_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "thời gian cảnh báo (phút)"
    },
    time_move_cskh: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "thời gian chuyển về cskh (phút)"
    },
    status_id_next: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "trạng thái được chuyển tiếp"
    }
  }, {
    sequelize,
    tableName: 'time_status',
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
        name: "time_status_status_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
