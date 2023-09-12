const router = require('express').Router()
const { Category, Expense, User } = require('../models')

// Get route for signup
router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router