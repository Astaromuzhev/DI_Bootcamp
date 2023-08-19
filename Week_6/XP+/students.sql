
CREATE TABLE students 
(
	id serial PRIMARY KEY,
	last_name VARCHAR(100) NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	birth_date DATE
);

INSERT INTO students ( first_name, last_name, birth_date)
VALUES 
('Marc', 'Benichou', '02/11/1998'),
('Yoan','Cohen','03/11/2010'),
('Lea',	'Benichou',	'07/27/1987'),

('Amelia',	'Dux',	'07/04/1996'),

('David',	'Grez',	'06/14/2003'),

('Omer'	,'Simpson',	'03/10/1980'),
('Anna','Staromuzhev', '02/04/1985');

SELECT id, first_name, last_name, birth_date FROM students;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE id>2;
SELECT id, first_name, last_name, birth_date FROM students
WHERE last_name='Benichou' AND first_name='Marc';
SELECT id, first_name, last_name, birth_date FROM students
WHERE last_name='Benichou' OR first_name='Marc';
SELECT id, first_name, last_name, birth_date FROM students
WHERE first_name LIKE '%a%';
SELECT id, first_name, last_name, birth_date FROM students
WHERE first_name like 'a%'; 
SELECT id, first_name, last_name, birth_date FROM students
WHERE first_name like '%a'; 
SELECT id, first_name, last_name, birth_date
  FROM students
WHERE first_name like '%a_';
SELECT id, first_name, last_name, birth_date FROM students WHERE id=1 OR id=3 ;

SELECT id, first_name, last_name, birth_date
  FROM students
WHERE birth_date>=('01/01/2000'); 


