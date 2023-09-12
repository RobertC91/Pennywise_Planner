const router = require("express").Router();
const { Category } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Categories
router.get("/", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one Category
router.get("/:id", withAuth, async (req, res) => {
  try {
    const oneCategory = await Category.findByPk({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create Category
router.post('/', withAuth, async (req, res) => {
    try {
      const newCategory = await Category.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Update Category
router.put('/', withAuth, async (req, res) => {
    try {
        const updatedCategory = await Category.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(updatedCategory)
    } catch (err) {
        res.status(400).json(err)
    }
})

// Delete Category
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router