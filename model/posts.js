const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "tiêu đề tin"
    },
    form_html: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "HTML FORM"
    },
    setting_form: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Style css form"
    },
    sale_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "array sale nhan khach"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "thứ tự sale nhận khách"
    },
    group: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nhóm khách hàng"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "nội dung tin"
    },
    campaign_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    }
  }, {
    sequelize,
    tableName: 'posts',
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
        name: "posts_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
    ]
  });
};
