const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_sms', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "sđt"
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "chiến dịch"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "nội dung tin nhắn"
    }
  }, {
    sequelize,
    tableName: 'history_sms',
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
        name: "history_sms_phone_index",
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "history_sms_campaign_id_index",
        using: "BTREE",
        fields: [
          { name: "campaign_id" },
        ]
      },
    ]
  });
};
