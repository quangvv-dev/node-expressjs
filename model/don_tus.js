const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('don_tus', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "loại đơn: 0:đơn nghỉ, 1:đơn checkin"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "ngày tạo đơn (với đơn nghỉ là từ ngày)"
    },
    time_to: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "từ giờ (với đơn checkin là giờ checkin)"
    },
    time_end: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "đến giờ"
    },
    reason_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "lý do"
    },
    accept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "người duyêt"
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "đến ngày (đơn nghỉ)"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "=0 chưa duyệt, 1: đã duyệt, 2: không duyệt"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "người tạo đơn"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "mô tả"
    }
  }, {
    sequelize,
    tableName: 'don_tus',
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
        name: "don_tus_reason_id_index",
        using: "BTREE",
        fields: [
          { name: "reason_id" },
        ]
      },
      {
        name: "don_tus_accept_id_index",
        using: "BTREE",
        fields: [
          { name: "accept_id" },
        ]
      },
      {
        name: "don_tus_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
