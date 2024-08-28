

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

Is a UI to connect to a database. There are others like MySQL workbench or DBeaver. 

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

