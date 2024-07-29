const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fanpage_posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    access_token: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "token page"
    },
    page_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    post_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_created: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "ngày đăng"
    },
    used: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "sử dụng lấy data tự động"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fanpage_posts',
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
        name: "fanpage_posts_page_id_index",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
