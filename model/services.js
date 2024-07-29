const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    price_buy: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price_sell: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    promotion_price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hsd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Ngày hết hạn đơn combo"
    },
    trademark: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "SP:2 hay DV:1"
    }
  }, {
    sequelize,
    tableName: 'services',
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
    ]
  });
};
