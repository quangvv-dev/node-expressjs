const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cccd: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    service: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    warranty_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Thời gian áp dụng"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ngày bắt đầu điều trị"
    },
    before: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Tình trạng ban đầu"
    },
    after: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Tình trạng sau điểu trị"
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Kết quả đạt được"
    },
    warranty_time: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Thời gian bảo hành"
    }
  }, {
    sequelize,
    tableName: 'contacts',
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
