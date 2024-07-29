const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('albums', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "SĐT",
      unique: "albums_customer_id_unique"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "chi nhánh"
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ảnh"
    }
  }, {
    sequelize,
    tableName: 'albums',
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
        name: "albums_customer_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
