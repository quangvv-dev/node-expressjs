const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('users', {
    id: {
        autoIncrement: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(191),
        allowNull: true,
        unique: "users_phone_unique"
    },
    approval_code: {
        type: DataTypes.STRING(191),
        allowNull: true,
        comment: "Mã chấm công"
    },
    name_display: {
        type: DataTypes.STRING(191),
        allowNull: true,
        comment: "tên hiển thị export"
    },
    code: {
        type: DataTypes.STRING(191),
        allowNull: true,
        comment: "Mã nhân viên"
    },
    email: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    percent_rose: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "% hoa hồng nếu có"
    },
    password: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    is_leader: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "Có phải là trưởng phòng hay k"
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "Phòng ban"
    },
    caller_number: {
        type: DataTypes.STRING(191),
        allowNull: true,
        comment: "mã hiệu số tổng đài"
    },
    devices_token: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "firebase token"
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pc_name: {
        type: DataTypes.STRING(191),
        allowNull: true,
        comment: "phiên đăng nhâp"
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "id"},
            ]
        },
        {
            name: "users_phone_unique",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "phone"},
            ]
        },
    ]
});

module.exports = User;
