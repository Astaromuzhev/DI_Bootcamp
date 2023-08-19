--Exercise 1
SELECT row_id,name, price FROM public.items
ORDER BY price;

SELECT row_id,name, price FROM public.items
WHERE price>=80
ORDER BY price DESC;

SELECT lst_name, fst_name FROM public.customers
ORDER BY fst_name
LIMIT 3;

SELECT lst_name FROM public.customers
ORDER BY lst_name DESC;

--Connect to dvdrental
--Exercise 2
SELECT customer_id, store_id, first_name, last_name, email,
address_id, activebool, create_date, last_update, active FROM customer;

SELECT first_name || ' ' ||  last_name AS full_name FROM customer;

SELECT count(1), create_date FROM customer
GROUP BY create_date;

SELECT customer_id, store_id, first_name, last_name, email,
address_id, activebool, create_date, last_update, active FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate desc;
;

SELECT address, phone FROM address
WHERE district='Texas';

SELECT  film_id, title, description, release_year, rental_duration,
	rental_rate, length, replacement_cost, rating, last_update, special_features, 
	fulltext FROM film
WHERE film_id>15 and film_id<150;


SELECT  film_id, title, description, 
	rental_rate, length FROM film
WHERE title like 'Am%';

SELECT title, description, rental_rate FROM film 
ORDER BY rental_rate
LIMIT 10;


SELECT cust.last_name, cust.first_name, pmt.amount, pmt.payment_date
from customer cust
	join payment pmt on pmt.customer_id = cust.customer_id;

SELECT title, description FROM film WHERE film_id NOT IN 
(SELECT film_id FROM inventory);

SELECT cust.last_name, cust.first_name, pmt.amount, pmt.payment_date
from customer cust
	join payment pmt on pmt.customer_id = cust.customer_id
--	join staff st on st.staff_id = pmt.staff_id
ORDER BY pmt.staff_id ;
	
	










