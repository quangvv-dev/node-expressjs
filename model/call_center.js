const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('call_center', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    caller_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "ID cuộc gọi"
    },
    call_type: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Gọi đến hay gọi đi"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "thời gian gọi"
    },
    caller_number: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "nguời gọi"
    },
    dest_number: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "nguời nghe máy"
    },
    answer_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Thời gian đàm thoại"
    },
    call_status: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Trạng thái cuộc gọi"
    },
    recording_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "File ghi âm"
    }
  }, {
    sequelize,
    tableName: 'call_center',
    timestamps: false,
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
        name: "call_center_caller_number_index",
        using: "BTREE",
        fields: [
          { name: "caller_number" },
        ]
      },
      {
        name: "call_center_dest_number_index",
        using: "BTREE",
        fields: [
          { name: "dest_number" },
        ]
      },
    ]
  });
};
