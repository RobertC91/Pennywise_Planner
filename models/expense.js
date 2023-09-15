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
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
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
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
});

module.exports = Expense