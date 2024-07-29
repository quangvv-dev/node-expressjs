const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Tên voucher"
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    money_promotion: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Số tiền khuyến mãi"
    },
    percent_promotion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "% khuyến mãi"
    },
    min_price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Giá trị đơn tối thiểu"
    },
    max_discount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Số tiền tối đa giảm theo %"
    },
    current_quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Số lượng voucher còn lại"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "Loai voucher 1: KM theo % , 2: theo tiền"
    },
    group: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Trạng thái KH"
    },
    service_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0,
      comment: "dịch vụ"
    }
  }, {
    sequelize,
    tableName: 'promotions',
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
