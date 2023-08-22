--PART I

CREATE TABLE customer (
	id serial PRIMARY KEY,
	first_name varchar(100),
	last_name varchar(100) NOT NULL
);

CREATE TABLE customer_profile (
	id serial PRIMARY KEY,
	isLoggedIn boolean DEFAULT false,
	customer_id integer,
	CONSTRAINT fk_customer
      FOREIGN KEY(customer_id) 
	  REFERENCES customer(id));

INSERT INTO customer (first_name, last_name)
	VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');
	
SELECT * FROM customer;

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES ('true', '1'),
('false', '2');

SELECT * FROM customer_profile;

SElECT first_name FROM customer cust
	LEFT OUTER JOIN customer_profile cust_prof on cust_prof.customer_id = cust.id
WHERE isLoggedIn = 'true';

SElECT first_name, isLoggedIn FROM customer cust
	LEFT OUTER JOIN customer_profile cust_prof on cust_prof.customer_id = cust.id ;
		
SElECT count(1) FROM customer cust
	LEFT OUTER JOIN customer_profile cust_prof on cust_prof.customer_id = cust.id 
WHERE isLoggedIn = 'false';

PART II
CREATE TABLE book (
	book_id SERIAL PRIMARY KEY, 
	title varchar(100) NOT NULL, 
	author varchar(100) NOT NULL);
	
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
	student_id SERIAL PRIMARY KEY, 
	name varchar(100) NOT NULL UNIQUE, 
	age integer);
	
INSERT INTO student (name, age)
VALUES 
('John', '12'),
('Lera', '11'),
('Patrick', '10'),
('Bob', '14')

SELECT * FROM student;
--drop TABLE library ;

CREATE TABLE library (
--id serial PRIMARY KEY,
book_fk_id integer 	references book 
					ON DELETE CASCADE 
					ON UPDATE CASCADE
,
student_fk_id integer references student 
					ON DELETE CASCADE 
					ON UPDATE CASCADE,
borrowed_date date,
	CONSTRAINT fk_book
      FOREIGN KEY(book_fk_id) 
	  REFERENCES book(book_id),
	CONSTRAINT fk_student
      FOREIGN KEY(student_fk_id) 
	  REFERENCES student(student_id),
PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO library (student_fk_id, book_fk_id, borrowed_date)
VALUES 
('1', '1', '2022-02-15'),
('4','3', '2021-03-03'),
('2', '1', '2021-05-23'),
('4', '2', '2021-08-12');
--Select all the columns from the junction table
SELECT student_fk_id, book_fk_id, borrowed_date FROM library;

--Select the name of the student and the title of the borrowed books
SELECT st.name, b.title FROM library lib
	LEFT OUTER JOIN student st  on lib.student_fk_id = st.student_id
	LEFT OUTER JOIN book b on lib.book_fk_id = b.book_id

--Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(st.age) FROM library lib
	LEFT OUTER JOIN student st  on lib.student_fk_id = st.student_id
	LEFT OUTER JOIN book b on lib.book_fk_id = b.book_id
WHERE book_fk_id='1';

--Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student;

SELECT * FROM library;
--library is empty after deleteing students








	

	