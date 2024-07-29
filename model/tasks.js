const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Người thực hiện"
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Khách hàng liên quan"
    },
    project_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Dự án"
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "id công việc cha"
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Tên công việc"
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "Mã công việc"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Loại công việc"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "chi nhánh"
    },
    sms_content: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "noi dung nhac lich khach hang"
    },
    date_from: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Thời gian thực hiện(Ngày)"
    },
    date_to: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Thời gian thực hiện(Ngày)"
    },
    time_from: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Thời gian thực hiện(Giờ)"
    },
    time_to: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Thời gian thực hiện(Giờ)"
    },
    document: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Tài liệu"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nội dung công việc"
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Độ ưu tiên"
    },
    task_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Trạng thái công việc"
    },
    customer_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "trạng thái khách hàng nếu có"
    },
    taskmaster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Người giao việc"
    },
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "phòng ban"
    }
  }, {
    sequelize,
    tableName: 'tasks',
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
        name: "tasks_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "tasks_customer_id_index",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "tasks_task_status_id_index",
        using: "BTREE",
        fields: [
          { name: "task_status_id" },
        ]
      },
      {
        name: "tasks_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
