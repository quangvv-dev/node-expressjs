const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedules', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id khach hang"
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "nhóm dịch vụ"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ngay hen"
    },
    time_from: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "khoang gio som nhat"
    },
    time_to: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "khoang gio som nhat"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nhân viên tạo"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "trạng thái lịch hẹn"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ghi chu"
    },
    person_action: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "người phụ trách"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Loại lịch hẹn"
    }
  }, {
    sequelize,
    tableName: 'schedules',
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
        name: "schedules_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "schedules_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "schedules_creator_id_index",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "schedules_person_action_index",
        using: "BTREE",
        fields: [
          { name: "person_action" },
        ]
      },
      {
        name: "idx_date_branch_id",
        using: "BTREE",
        fields: [
          { name: "date" },
          { name: "branch_id" },
        ]
      },
    ]
  });
};
