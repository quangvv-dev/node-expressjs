const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    mkt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nhân viên Marketing"
    },
    carepage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    telesales_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nhân viên Telesales"
    },
    cskh_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "cskh phụ trách"
    },
    genitive_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "nhóm tính cách"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "id nguồn khách hàng : facebook, zalo, google"
    },
    source_fb: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Mối quan hệ : mới, chua kết nối ..."
    },
    full_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    account_code: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Mã khách hàng"
    },
    membership: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "mã thành viên"
    },
    wallet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Ví tiền"
    },
    wallet_ctv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Ví cộng tác viên"
    },
    active_app: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "hiển thị app hoặc không"
    },
    category_tips: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "nhóm dịch vụ liên quan"
    },
    address: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Địa chỉ khách hàng"
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Mật khẩu"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0: Nữ| 1: Nam"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Link Facebook"
    },
    avatar: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "ảnh đại diện"
    },
    locale_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fb_name: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: "Tên FaceBook"
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Chi nhánh"
    },
    old_customer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Khách hàng cũ"
    },
    is_gioithieu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "id người giới thiệu"
    },
    type_ctv: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    devices_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "firebase token customers"
    },
    ngay_sale_nhan_data: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Ngày sale nhận data)"
    },
    expired_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "thời gian quá hạn"
    },
    time_move_cskh: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "thời gian chuyển về cskh"
    },
    expired_time_boolean: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:chưa quá hạn,1:đã quá hạn,2:chuyển về cskh"
    },
    is_duplicate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1: là số trùng"
    },
    last_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "lần tương tác cuối của sale"
    }
  }, {
    sequelize,
    tableName: 'customers',
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
        name: "customers_telesales_id_index",
        using: "BTREE",
        fields: [
          { name: "telesales_id" },
        ]
      },
      {
        name: "customers_status_id_index",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "customers_branch_id_index",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "customers_old_customer_index",
        using: "BTREE",
        fields: [
          { name: "old_customer" },
        ]
      },
      {
        name: "customers_carepage_id_index",
        using: "BTREE",
        fields: [
          { name: "carepage_id" },
        ]
      },
      {
        name: "customers_created_at_index",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
