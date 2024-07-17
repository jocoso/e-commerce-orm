-- Insert categories
INSERT INTO category (category_name) VALUES ('Electronics');
INSERT INTO category (category_name) VALUES ('Books');
INSERT INTO category (category_name) VALUES ('Clothing');
INSERT INTO category (category_name) VALUES ('Toys');

-- Insert products
INSERT INTO product (price, stock, category_id) VALUES (299.99, 50, 1);
INSERT INTO product (price, stock, category_id) VALUES (19.99, 100, 2);
INSERT INTO product (price, stock, category_id) VALUES (49.99, 75, 3);
INSERT INTO product (price, stock, category_id) VALUES (15.99, 200, 4);
INSERT INTO product (price, stock, category_id) VALUES (99.99, 20, 1);

-- Insert tags
INSERT INTO tag (tag_name) VALUES ('New Arrival');
INSERT INTO tag (tag_name) VALUES ('Discount');
INSERT INTO tag (tag_name) VALUES ('Popular');
INSERT INTO tag (tag_name) VALUES ('Limited Edition');

-- Insert productTag relationships
INSERT INTO productTag (product_id, tag_id) VALUES (1, 1); -- Electronics New Arrival
INSERT INTO productTag (product_id, tag_id) VALUES (2, 2); -- Books Discount
INSERT INTO productTag (product_id, tag_id) VALUES (3, 3); -- Clothing Popular
INSERT INTO productTag (product_id, tag_id) VALUES (4, 1); -- Toys New Arrival
INSERT INTO productTag (product_id, tag_id) VALUES (5, 4); -- Electronics Limited Edition
INSERT INTO productTag (product_id, tag_id) VALUES (1, 3); -- Electronics Popular
