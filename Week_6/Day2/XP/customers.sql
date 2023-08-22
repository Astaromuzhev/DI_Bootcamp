-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
CREATE TABLE items (row_id serial PRIMARY KEY, 
					name VARCHAR (100),
					price NUMERIC (10,2) );
					
INSERT INTO  items (row_id, name, price )
VALUES ('1', 'Small Desk', '100'),
('2', 'Large desk', '300'),
('3', 'Fan','80');

SELECT row_id, name, price FROM items;

CREATE TABLE customers (row_id serial PRIMARY KEY, 
					fst_name VARCHAR (100),
					lst_name VARCHAR (100));
INSERT INTO  customers (fst_name, lst_name )
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson');

--All the items.
SELECT row_id, name, price FROM items;

--All the items with a price above 80 (80 not included).
SELECT row_id, name, price FROM items
WHERE price>80;

--All the items with a price below 300. (300 included)
SELECT row_id, name, price FROM items
WHERE price<=300;

--All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT row_id, fst_name, lst_name FROM customers
WHERE lst_name = 'Smith';

--All customers whose last name is ‘Jones’.
SELECT row_id, fst_name, lst_name FROM customers
WHERE lst_name = 'Jones';
--All customers whose firstname is not ‘Scott’
SELECT row_id, fst_name, lst_name FROM customers
WHERE fst_name <> 'Scott';



					
					