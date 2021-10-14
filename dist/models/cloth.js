"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Cloth extends sequelize_1.Model {
}
Cloth.init({
    top_buttom: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true
    },
    short_long: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true
    },
    color: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true
    },
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    modelName: 'Cloth',
    tableName: 'clothes',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    underscored: true
});
exports.default = Cloth;
//# sourceMappingURL=cloth.js.map