### SQL QUERIES

#### SQL Datatypes

**TEXT**  
**single quotes! Postgres does not allow double quotes**
`WHERE customername = 'Brown';`  
*to escape a single quote, use double quote: `'O"Brien'`*  

**NUMERIC FIELDS (no quotes)**  
Use =, >, >=, < and <=  

**DATE FIELDS**  
**single quotes! syntax depends on location and system setup for dates**  
`WHERE orderdate = '2020-05-14';`  
`WHERE orderdate > '2020-01-01';`  

**BOOLEANS**  
Boolean values TRUE and FALSE  


**Before creating a table:** use  
`drop table if exists *table name(s)*;`  

**SCHEMAS**  
To be able to work with tables in a schema, you add the schema name before the table name: production.product, for example.

**SELECT queries**  
* `SERIAL PRIMARY KEY` defines a unique identifier for each row that will automatically increment every time data is inserted
* `VARCHAR()` defines a column to hold text with a maximum length of characters
* `NOT NULL` defines the column as not nullable: a value must be set
* `DEFAULT` you can set a default value if the value cannot be null
* `INT`
* `TEXT`
* `BOOLEAN`
* `DATE`
*A database will reject any values that do not match the type!*  
* `INSERT INTO` *table name* (keys to be used) `VALUES` ('value for key', 'value for key', etc.)
* `REFERENCES` *table name*(*table key*) The type also has to be added, for example `INT`: `customer_id    INT REFERENCES customers(id)`
* `SERIAL` creates a sequence that generates a sequence of integers (often used as primary key column in a table by using `id SERIAL`). `SERIAL` creates an auto-increment column for a table.


**Subquery**  
* A complex query can be split into one *outer query* and *subqueries*.
* It is recommended to write each query and then nest them into the outer query (main query). Example:
```
select * from customers where id in (  
  select customer from orders where product_name = (  
    select id from products where name = 'Maximum' and type = 'Variable'  
    )  
    )  
```

**Foreign Key**  
Syntax: `FOREIGN KEY (column) REFERENCES parent_table (table_name)`  
* A foreign key is a column or a group of columns used to identify a row uniquely of a different table.
* The table that comprises the foreign key is called the referencing table or child table.
* The table to that the foreign key references is known as the referenced table or parent table.
* A table can possess multiple foreign keys according to its relationships with other tables. 

**To reference a foreign key**
* make the field in the parent table unique so that there is not more than one record that matches.   
Example: table *students* has *name*: put UNIQUE there or add it later on with: 
```
alter table students  
add constraint name unique (name)
```
* add a unique key for the field in the table that you are linking to in your new table. Example:  
```
create table class_attendance (
id SERIAL primary key,
student_id INT UNIQUE,
student_name VARCHAR(30) UNIQUE,
FOREIGN KEY (student_id) REFERENCES students (id),
FOREIGN KEY (student_name) REFERENCES students (name)
)
```

**Alter table**
* To change the structure of an existing table, you use PostgreSQL ALTER TABLE statement. The syntax is:  
`ALTER TABLE table_name action;`
* The following changes to an existing table are available (data_type can be INT, VARCHAR, etc.):
```
ALTER TABLE table_name 
ADD COLUMN column_name data_type column_constraint;

ALTER TABLE table_name 
DROP COLUMN column_name;

ALTER TABLE table_name 
RENAME COLUMN column_name 
TO new_column_name;

ALTER TABLE table_name 
ALTER COLUMN column_name 
[SET DEFAULT value | DROP DEFAULT];

ALTER TABLE table_name 
RENAME TO new_table_name;

```

#### JOINING TABLES
A single query can combine information from many tables. This can be done in may ways:  
* only records that have data on both tables that are joined
* all records from one table and any matching records from the second table
* all records from one table matched with all records from the second table

**Inner Join**  
Default - returns only records with matching values in both tables.  
Use the full tablename `table_name.field_name`   Example: `customers.customerid`  
Syntax:  
```
SELECT column_names  
FROM table1  
INNER JOIN table2 ON table2.column_name = table1.column_name;  
```
Instead of `INNER JOIN` you can use `JOIN` since `INNER` is the default for `JOIN`. Example:  
```
SELECT companyname, orderdate, shipcountry  
FROM orders  
JOIN customers ON customers.customerid = orders.customerid  
```


