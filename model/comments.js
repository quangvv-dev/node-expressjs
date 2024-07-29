const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    page_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    FB_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fb_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    snippet: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'comments',
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
        name: "comments_page_id_index",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
      {
        name: "comments_post_id_index",
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
      {
        name: "comments_fb_id_index",
        using: "BTREE",
        fields: [
          { name: "FB_ID" },
        ]
      },
    ]
  });
};
