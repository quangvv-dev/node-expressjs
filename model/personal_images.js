const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personal_images', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "Tên tài liệu"
    },
    link: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "Đường dẫn file"
    },
    type_file: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "Loại file"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null : ảnh cá nhân, not null hiệu quả công việc "
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'personal_images',
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
        name: "personal_images_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
