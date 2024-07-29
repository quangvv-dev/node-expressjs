const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sources', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Loại kết nối, fb, zalo .."
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    chanel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "kênh quảng cáo"
    },
    category_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "nhóm dịch vụ"
    },
    sale_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "mảng id sale phụ trách"
    },
    url_source: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "url nguồn"
    },
    form_html: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "form nhúng"
    },
    accept: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "duyệt"
    },
    mkt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "người tạo"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "chia data đến vị trí"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sources',
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
    ]
  });
};
