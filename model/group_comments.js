const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_comments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id khách hàng"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id nhân viên"
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Image comment"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    call_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'group_comments',
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
        name: "group_comments_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "group_comments_customer_id_index",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
