const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_personal', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    position_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "id chức vụ"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cccd: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "số căn cước"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    insurance_number: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Số BHXH"
    },
    start_probation: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Ngày bắt đầu thử việc"
    },
    start_work: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Ngày bắt đầu chính thức"
    },
    insurance_time: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Thời gian đóng bảo hiểm"
    },
    pause_time: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Thời gian tạm nghỉ"
    },
    leave_time: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Thời gian nghỉ việc"
    },
    leave_reason_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Lý do nghỉ"
    }
  }, {
    sequelize,
    tableName: 'user_personal',
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
      {
        name: "user_personal_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
