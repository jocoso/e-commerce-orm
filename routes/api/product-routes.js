const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
        },
        {
          model: Tag,
          through: {
            attributes: [],
          },
          attributes: ['id', 'tag_name'],
        },
      ],
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving products.', error: error.message });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
        },
        {
          model: Tag,
          through: {
            attributes: [],
          },
          attributes: ['id', 'tag_name'],
        },
      ],
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the product.', error: error.message });
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const { product_name, price, stock, tagIds } = req.body;
    const product = await Product.create({ product_name, price, stock, category_id: req.body.category_id });

    if (tagIds && tagIds.length) {
      const productTagIdArr = tagIds.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const { tagIds, ...productData } = req.body;
    const product = await Product.update(productData, {
      where: { id: req.params.id },
    });

    if (!product[0]) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (tagIds && tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }));

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !tagIds.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// delete product
router.delete('/:id', async (req, res) => {
  try {
    const result = await Product.destroy({
      where: { id: req.params.id },
    });

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

module.exports = router;
