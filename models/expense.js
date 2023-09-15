const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model {}

Expense.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
         type: DataTypes.STRING,
         allowNull:false
    },
    amount: {
        type:DataTypes.FLOAT,
        allowNull:false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},{
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'expense',
});

module.exports = Expense