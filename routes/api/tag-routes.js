const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      
    });
    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving tags.', error: error.message });
  }
});

// Get one tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: { attributes: [] },
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the tag.', error: error.message });
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Update a tag
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedTag[0]) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Delete a tag
router.delete('/:id', async (req, res) => {
  try {
    const result = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!result) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

module.exports = router;
