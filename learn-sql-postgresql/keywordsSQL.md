### SQL datatypes:

**Before creating a table:** use  
> drop table if exists *table name(s)*  

**TEXT**  
**single quotes! Postgres does not allow double quotes**
> WHERE customername = 'Brown'  
*to escape a single quote, use double quote: 'O"Brien'*  

**NUMERIC FIELDS (no quotes)**  
Use =, >, >=, < and <=  

**DATE FIELDS**  
**single quotes! syntax depends on location and system setup for dates**  
> WHERE orderdate = '2020-05-14'  
> WHERE orderdate > '2020-01-01'  

### SQL keywords:
SELECT                    MIN  
FROM                      MAX  
WHERE                    AVG  
AND                         SUM  
OR                            LIKE  
BETWEEN               DESC  
IN                             ASC  
DISTINCT                LIMIT    
ORDER BY              JOIN ON  
AS                            NULL  
HAVING  

**SELECT**  
Selecting all data from table:   
> SELECT *  
> FROM *table_name*

Selecting with field names:  
> SELECT *column1*, *column2*, ...  
> FROM *table_name*

Selecting distinct values (only one value for each type, ignores duplicates):  
> SELECT DISTINCT *column1*, *column2*, ...  
> FROM *table_name*

**SELECT COUNT**  
*How many* records match? (e.g. how many items in a table)  
> SELECT COUNT (*column1*)  
> FROM *table_name*

or for all rows:  
> SELECT COUNT (*)  
> FROM *table_name*

Combine with **DISTINCT**:  
> SELECT COUNT (DISTINCT *column*)  
> FROM *table_name*

**Combining fields for calculations**  
> SELECT *column1* + *column2*  
> SELECT *column1* / 1.1  

**WHERE to narrow down selection**  
> SELECT *column1*, *column2*  
> FROM *table_name*  
> WHERE *condition*  

**LOGICAL OPERATORS: AND, OR, NOT**  
* Using AND with WHERE: all conditions must be true for a record to be selected
> WHERE *condition1* AND *condition2* AND *condition3* ...  
* Using OR with WHERE: one of the conditions must be true for a record to be selected
> WHERE *condition1* OR *condition2* OR *condition3* ...  
* Using OR with WHERE: a record will be selected if the condition(s) is not true
> WHERE NOT *condition*  
* Combining AND, OR and NOT with WHERE: *use parentheses to group for clarity!*  
> WHERE (*condition1* AND *condition2*) OR *condition3*  

**BETWEEN operator**  
BETWEEN is a shortcut for >= xxx AND <= xxx  
> WHERE *column* BETWEEN xxx AND xxx  

**IN operator**  
In queries many conditions (WHERE id=2 OR id=9 OR id=15 OR id=18 OR id=22) you can use  
> WHERE id IN (2, 9, 15, 18, 22)  
It can also be used to find values between two numbers:  
> WHERE id IN (20, 50)  
This will select each id that is between 20 and 50.  

**ORDER BY**  
To get ordered results, ascending or descending:  
> SELECT DISTINCT *column*  
> FROM *tablename*  
> ORDER BY *column* ASC  (or DESC)  
Also here you can add more columns to search in:  
> SELECT DISTINCT *column1*, *column2*  
> FROM *tablename*  
> ORDER BY *column1* ASC, *column2* ASC  

**MIN MAX**  
Can be used for dates as well (earliest - latest).  
> SELECT MAX *column*  
> FROM *tablename*  

**AVG**  
Calculate the average:  
> SELECT AVG (*column*)  
> FROM *tablename*  
> WHERE *condition*  

**SUM**  
Calculate the number/amount:  
> SELECT SUM (*column* ) 
> FROM *tablename*  
> WHERE *condition*  

**LIKE** Match patterns with `LIKE`:  
> SELECT *column1*, *column2*  
> FROM *table_name*  
> WHERE *column* LIKE *pattern*  
**Using % you create a pattern:**  
> WHERE suppliername LIKE 'a%' (all supplier names starting with a)  
> WHERE suppliername LIKE '%t' (all supplier names ending on t)  
> WHERE suppliername LIKE '%ker%' (all supplier names with ker in name somewhere)  
> WHERE suppliername LIKE 'A%i' (all supplier names starting with A and ending with i)  
**case-sensitive!**  

**Underscore: _** Match patterns with `_`:  
`_` stands for *any* single character and can be used for an open character space:  
`WHERE contactname LIKE '_a%';` uses an open space and 'a' as second letter  
`WHERE contactname LIKE 'E_%_%'` name starts with 'E' and has at least two other letters  

**AS** *setting an alias name to columns with AS*  
You can do a query and give the result a column name for clarity:  
> SELECT price * quantity AS TotalSpent  
> FROM order_details  
Since the alias column first has to be created with the SELECT statement, you cannot use `FROM`, `WHERE` or `HAVING`.  
It is possible to use `GROUP BY` and `ORDER BY` because these statements are evaluated after `SELECT`.







------------
**SCHEMAS**  
To be able to work with tables in a schema, you add the schema name before the table name: production.product, for example.

**TABLES**  
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
* It is recommended to write each query and then nest them into the outer query (main query).
* Example: `select * from customers where id in (select customer from orders where product_name = (select id from products where name = 'Maximum' and type = 'Variable'))


**Foreign Key**  
Syntax: `FOREIGN KEY (column) REFERENCES parent_table (table_name)`  
* A foreign key is a column or a group of columns used to identify a row uniquely of a different table.
* The table that comprises the foreign key is called the referencing table or child table.
* The table to that the foreign key references is known as the referenced table or parent table.
* A table can possess multiple foreign keys according to its relationships with other tables. 

**To reference a foreign key**
* make the field in the parent table unique so that there is not more than one record that matches. Example: table *students* has *name*: put UNIQUE there or add it later on with: 
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











