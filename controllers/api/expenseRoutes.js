const router = require("express").Router();
const { Expense } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Expenses
router.get("/", withAuth, async (req, res) => {
  try {
    const expenseData = await Expense.findAll({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(expenseData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one Expense
router.get("/:id", withAuth, async (req, res) => {
  try {
    const oneExpense = await Expense.findByPk({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(oneExpense);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create Expense
router.post('/', withAuth, async (req, res) => {
    try {
      const newExpense = await Expense.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newExpense);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Update Expense
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedExpense = await Expense.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(updatedExpense)
    } catch (err) {
        res.status(400).json(err)
    }
})

// Delete Expense
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const expenseData = await Expense.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!expenseData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(expenseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router