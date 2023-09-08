const router = require('express').Router()
const userRoutes = require('./userRoutes')
const expenseRoutes = require('./expenseRoutes')
const categoryRoutes = require('./categoryRoutes')

router.use('/users', userRoutes)
router.use('/expenses', expenseRoutes)
router.use('/categories', categoryRoutes)

module.exports = router