const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    setting_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    setting_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'settings',
    timestamps: false
  });
};
