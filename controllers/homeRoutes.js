const router = require('express').Router()
const { Category, Expense, User } = require('../models')

// Get route for signup
router.get('/signup', (req, res) => {
    res.render('signup')
})

// Get route for login page
router.get("/login", (req, res) => {
    if (req.session.user) {
      return res.redirect("/");
    }
    res.render("login");
  });

module.exports = router