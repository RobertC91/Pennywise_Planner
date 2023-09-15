const router = require("express").Router();
const { Expense, User } = require("../models");
const withAuth = require("../utils/auth");

// Get route for main
router.get("/", withAuth, async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {

    const expenseData = await Expense.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    res.render('dashboard', {
      expenses,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const userData = req.params.user_id;

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Fetch expenses associated with the user
    const expenses = await Expense.findAll({
      where: { userData },
    });

    // Render the Handlebars template and pass the expenses data
    res.render('dashboard', { expenses, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get route for signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Get route for login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
  }
  
  res.render("login");
});

module.exports = router;