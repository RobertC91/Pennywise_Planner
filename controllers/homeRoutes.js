const router = require("express").Router();
const { Category, Expense, User } = require("../models");

// Get route for main
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for Dashboard
router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    res.status(400).json(err)
  }
})

// Get route for signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Get route for login page
router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("login");
});


module.exports = router;
