const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    all_total: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    count_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    the_rest: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gross_revenue: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Doanh thu"
    },
    discount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Chiết khấu từ voucher"
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Id voucher"
    },
    discount_order: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Chiết khấu theo tổng đơn"
    },
    role_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "SP:2 hay DV:1"
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0: Tiền mặt| 1: Thẻ"
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Ngày thanh toán"
    },
    hsd: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Ngày hết hạn đơn combo"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0: Đơn hàng thường| 1: Liệu trình"
    },
    spa_therapisst_id: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Id Kỹ thuật viên"
    },
    support_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "người tư vấn"
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Người tạo đơn"
    },
    carepage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    code: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Mã đơn hàng"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    },
    is_upsale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Đơn upsale"
    },
    mkt_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    telesale_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cskh_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Sao đánh giá"
    },
    comment_rate: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nội dung đánh giá"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Từ nguồn (FB,Zalo,Hotline...)"
    }
  }, {
    sequelize,
    tableName: 'orders',
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
      {
        name: "orders_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "orders_is_upsale_index",
        using: "BTREE",
        fields: [
          { name: "is_upsale" },
        ]
      },
      {
        name: "orders_carepage_id_index",
        using: "BTREE",
        fields: [
          { name: "carepage_id" },
        ]
      },
      {
        name: "orders_mkt_id_index",
        using: "BTREE",
        fields: [
          { name: "mkt_id" },
        ]
      },
      {
        name: "orders_telesale_id_index",
        using: "BTREE",
        fields: [
          { name: "telesale_id" },
        ]
      },
      {
        name: "orders_member_id_index",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "orders_cskh_id_index",
        using: "BTREE",
        fields: [
          { name: "cskh_id" },
        ]
      },
      {
        name: "orders_role_type_index",
        using: "BTREE",
        fields: [
          { name: "role_type" },
        ]
      },
      {
        name: "orders_created_at_index",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
