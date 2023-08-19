SELECT count(1) FROM actor;
SELECT * FROM actor;
INSERT INTO actor (first_name)
VALUES ('Anna');
--null constraint
INSERT INTO actor (last_name)
VALUES ('Staromuzhev');
--null constraint
INSERT INTO actor (first_name, last_name)
VALUES ('Anna','Staromuzhev');