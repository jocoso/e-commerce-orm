const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Import models to sync them with the database
const { Category, Product, Tag, ProductTag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/products', require('./routes/api/product-routes'));
app.use('/api/categories', require('./routes/api/category-routes'));
app.use('/api/tags', require('./routes/api/tag-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
