--Get a list of all the languages, from the language table.
SELECT * FROM language ;

--Get a list of all films joined with their languages – select the following details :
--film title, description, and language name.
select f.title, f.description, l.name  from film f
	left outer join language l on l.language_id = f.language_id;

--Get all languages, even if there are no films in those languages 
--– select the following details : film title, description, and language name.
select l.name, f.title, f.description from language l 
	left outer join film f on l.language_id = f.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film 
(id serial PRIMARY KEY,
 name varchar(100));
 
 INSERT INTO new_film (name)
 VALUES ('Games of Trones'),('Squid game');
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review
	(
		review_id serial PRIMARY KEY,
		film_id integer REFERENCES new_film
						ON DELETE CASCADE,
		language_id integer REFERENCES language,
		title varchar(100),
		score int CONSTRAINT score_value_check CHECK (score > 0 AND score <11),
		review_text varchar,
		last_updated timestamp,
		FOREIGN KEY(film_id) REFERENCES new_film (id),
		FOREIGN KEY(language_id) REFERENCES language (language_id)
	)
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.	
INSERT INTO customer_review (film_id, language_id, title,score,  review_text, last_updated)
VALUES --('1','1','Title for film1', '9', 'review for film1', '2023-08-22 21:00:00')
('2','1','Title for film2', '9', 'review for film2', '2023-08-22 21:00:00')
select * from customer_review;
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film where id = '1';
SELECT * FROM new_film;
select * from customer_review;
--from review record was deleted too;
-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = '2'
--SELECT * from film
where film_id IN ('133','384');
-- Which foreign keys (references) are defined for the customer table? 
	--customer_addrees_id_fkey
--How does this affect the way in which we INSERT into the customer table?
	--we should add to customer_addrees_id existing id from address


-- We created a new table called customer_review. Drop this table. 
-- Is this an easy step, or does it need extra checking?
drop table customer_review;
	--easy

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(1) FROM rental
WHERE return_date IS NULL

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title, p.AMOUNT, r.return_date FROM film f
	left outer join inventory i on i.film_id = f.film_id
	left outer join rental r on i.inventory_id = r.inventory_id
	left outer join payment p on p.rental_id = r.rental_id
WHERE r.return_date IS NULL
and AMOUNT IS not null
ORDER BY AMOUNT DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. 
--He knows he wants to see 4 movies, but he can’t remember their names. 
--Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT num, title, description FROM (
	select '1' as num, title, description from film f
		left outer join film_actor f_a on f_a.film_id = f.film_id
		left outer join actor a on f_a.actor_id = a.actor_id
	WHERE LOWER(f.description) like '%sumo wrestler%'
	and a.last_name='Monroe'
	and a.first_name='Penelope'
	UNION
	-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
	select '2' as num, title, description from film f
		left outer join film_category f_c on f_c.film_id = f.film_id
		left outer join category c on c.category_id = f_c.category_id
	where c.name='Documentary'
	and length<60
	and f.rating='R'
	UNION
	-- The 3rd film : A film that his friend Matthew Mahan rented. 
	--He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
	select '3' as num, title, description from film f
		left outer join inventory i on i.film_id = f.film_id
		left outer join rental r on r.inventory_id = i.inventory_id
		left outer join customer c on r.customer_id = c.customer_id
		left outer join payment p on p.rental_id = r.rental_id
	where last_name='Mahan' and first_name='Matthew'
	and return_date between '2005-07-28' and '2005-08-01'
	and p.amount>4
	UNION
	-- The 4th film : His friend Matthew Mahan watched this film, as well. 
	--It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
	SELECT num, title, description FROM (
		SELECT '4' as num, title, description FROM film f
			left outer join inventory i on i.film_id = f.film_id
			left outer join rental r on r.inventory_id = i.inventory_id
			left outer join customer c on r.customer_id = c.customer_id
			left outer join payment p on p.rental_id = r.rental_id
		WHERE c.last_name='Mahan' and c.first_name='Matthew'
		AND (LOWER(f.description) like '%boat%'
			 OR 
			 LOWER(f.title) like '%boat%')
		ORDER BY p.amount DESC
		LIMIT 1) num_4 
) all_list
ORDER BY num
;
