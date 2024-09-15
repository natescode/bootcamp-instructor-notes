

## Install Postgres

https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/windows/

**RUN INSTALLER AS ADMINISTRATOR**

Installer gives option to install pgAdmin, select that!

## Mac OS

You can install via homebrew
`brew install postgressql@16`

## Windows (if you aren't using the installer)

Chocolatey
```bash
choco install postgresql --params '/Password:test' --params-global`
```

## pgAdmin

Is a UI to connect to a database. There are others like MySQL workbench or DBeaver. I'm using this instead of the `psql` CLI tool that is mentioned in the lesson. Professionally, software engineers and database administrators use Database Clients like pgAdmin.

Here is what my `natescode` database looks like. You can right click to make a new database.
![[pgadmin_1.png]]

## CRUD with SQL example

```sql
-- Delete the table if we already have it so we start fresh
DROP TABLE IF EXISTS produce; 

-- create a table named produce
CREATE TABLE IF NOT EXISTS produce ( 
	id INTEGER PRIMARY KEY, 
	name VARCHAR(100) UNIQUE ); 

-- add data into produce
INSERT INTO produce (id, name)
VALUES (1, 'Apple'), (2, 'Banana'), (3, 'Carrot'), (4, 'Date'), (5, 'Eggplant'); 

-- delete from produce if name is 'Eggplant'
DELETE FROM produce 
WHERE name = 'Eggplant'; 

UPDATE produce 
SET name = 'Strawberry' 
WHERE id = 1; 

SELECT * FROM produce ORDER BY name asc;
```

## POSTGRES changes from DATABASE to SCHEMA etc

Had to make some changes to lesson provided SQL because the lesson uses the command line app `psql` to connect to the Postgres database instead of `pgadmin`. I feel that `pgadmin` is easier and more practical, it is what I use professionally. Even DB admins use pgAdmin (or other clients) instead of the command line to connect to databases.

Furthermore, the lesson creates a lot of different databases but I'll have you all create schemas instead. Postgres' schema = MySQL database (more or less for our uses).

```postgresql
-- WAS: DROP DATABASE IF EXISTS grocery_db
DROP SCHEMA IF EXISTS grocery_db;
-- WAS: CREATE DATABASE grocery_db;
CREATE SCHEMA grocery_db;
-- WAS: \c grocery_db;
-- this switches to the `grocery_db` SCHEMA
SET search_path TO grocery_db;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);
```

## Foreign Keys

### Long way

```postgresql
CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);
```

### Short Way
```postgresql
CREATE TABLE customer_orders2 (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id) ON DELETE SET NULL,
  order_details TEXT
);
```

## JOINS

### SCHEMA

```postgresql
-- Active: 1724888465096@@127.0.0.1@5432@natescode

DROP SCHEMA IF EXISTS books_db;
CREATE SCHEMA books_db;
SET search_path TO books_db;

CREATE TABLE book_prices (
	id SERIAL PRIMARY KEY,
	price INTEGER NOT NULL
);

  
CREATE TABLE favorite_books (
	id SERIAL PRIMARY KEY,
	book_name VARCHAR(30) NOT NULL,
	in_stock BOOLEAN,
	book_price INTEGER,
	FOREIGN KEY (book_price)
	REFERENCES book_prices(id)
	ON DELETE SET NULL
);
```

### SEED (DATA)

```postgresql
INSERT INTO book_prices (price)

VALUES 
	(1),
	(2),
	(5),
	(10),
	(15),
	(33),
	(99);


INSERT INTO favorite_books (book_name, in_stock, book_price)
VALUES 
	('The Great Gatsby', true, 1),
	('Huckleberry Finn', true, 3),
	('100 Years of Solitude', false, 5),
	('Things Fall Apart', false, 1),
	('Crime and Punishment', true, 2),
	('Moby Dick', true, 4),
	('Decameron', false, 1),
	('Where the Red Furn Grows', false, null),
	('Twenty Thousand Leagues...', false, null),
	('Treasure Island', true, null);
```

### JOINS

```postgresql
SET search_path TO books_db;

SELECT *
FROM book_prices;

SELECT *
FROM favorite_books;

-- INNER JOIN AKA JOIN
SELECT *
FROM favorite_books
INNER JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- LEFT JOIN
SELECT *
FROM favorite_books
LEFT JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- RIGHT JOIN
SELECT *
FROM favorite_books
RIGHT JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- OUTER JOIN
SELECT *
FROM favorite_books
FULL OUTER JOIN book_prices ON favorite_books.book_price = book_prices.id;
```

#### INNER JOIN

This will gives us the book_prices and favorite_books ONLY if neither are null

![[inner_join_results.png]]

#### LEFT JOIN

This means give ALL records, null foreign key or not of the left table (favorite books).

![[left_join_results.png]]

#### Right JOIN

Give all the right table (book_prices) even if there is no book with that price (favorite_books)

![[right_join_results.png]]

## Connect to Database from Node / Express

We can use the [pg](https://www.npmjs.com/package/pg) npm package to connect to Postgres.

### Install pg

`npm i pg`

### Connect from Express

There are a few ways actually according to the documentation. Connecting directly with `client` from the `pg` package or creating a connection pool. Connection pools are just what they sound like, they are a group of connections that can be reused. This is more efficient. Database connections do use memory and multiple connections allow multiple queries to run in parallel. 

### Client

```javascript
import { Client } from 'pg';

const client = new Client();

await client.connect(); // have the client connect

const res = await client.query('SELECT $1::text as message', ['Hello world!']);

console.log(res.rows[0].message); // Hello world!

await client.end(); // close the client connection
```

### Pool (what the lessons use)

```javascript
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool();

pool.query(`SELECT * FROM users WHERE id = %1`, [13], ()=> console.log('query completed')}'
```