const User = require('./user')
const Expense = require('./expense')

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Expense.belongsTo(User, {
    foreignKey:'user_id'
})


module.exports = {
    User,
    Expense,
}