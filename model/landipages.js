const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('landipages', {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "nội dung tin"
    },
    slug: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "đường dẫn",
      unique: "landipages_slug_unique"
    },
    active: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "sdt tư vấn"
    },
    thumbnail: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Đường dẫn form"
    }
  }, {
    sequelize,
    tableName: 'landipages',
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
        name: "landipages_slug_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
