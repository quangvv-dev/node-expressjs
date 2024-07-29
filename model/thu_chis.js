const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thu_chis', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    danh_muc_thu_chi_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    so_tien: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    thuc_hien_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "người thực hiện"
    },
    duyet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "<5tr thì k cần ai duyệt"
    },
    ly_do_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "lý do thu chi"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0: tiền tại quầy, 1: trong két"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: ">5tr thì phải duyệt, nhỏ hơn thì auto"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'thu_chis',
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
