DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Products;
CREATE TABLE IF NOT EXISTS Products(product_name varchar(255), page_layout int, product_description_1 TEXT, product_description_2 TEXT, product_image_link varchar(255));
INSERT INTO Products VALUES('Green Battery', 1, 'This is a green battery. Wooo!!', 'It is also a test. It has a layout of 1', 'https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0dGVyeXxlbnwwfHwwfHx8MA%3D%3D
Response time 1049ms, query time 0.20ms');