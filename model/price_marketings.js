const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price_marketings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nguồn dữ liệu"
    },
    budget: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Ngân sách"
    },
    number_click: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Số lượt click"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "dữ liệu ngày"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Người cập nhật"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Chi nhánh"
    },
    comment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Số lượng bình luận"
    },
    message: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Số lượng tin nhắn"
    }
  }, {
    sequelize,
    tableName: 'price_marketings',
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
        name: "price_marketings_source_id_index",
        using: "BTREE",
        fields: [
          { name: "source_id" },
        ]
      },
    ]
  });
};
