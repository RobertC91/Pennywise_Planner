const User = require('./user')
const Expense = require('./expense')
const Category = require('./category')

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Expense.belongsTo(User, {
    foreignKey:'user_id'
})

Expense.hasOne(Category, {
    foreignKey:'category_id',
    onDelete: 'CASCADE'
})
Category.belongsTo(Expense, {
    foreignKey:'category_id'
})

User.hasMany(Category, {
    foreignKey:'user_id',
    onDelete: 'CASCADE'
})
Category.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Expense,
    Category
}