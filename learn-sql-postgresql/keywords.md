### SQL keywords:
SELECT  
FROM  
WHERE  
AND  
OR  
BETWEEN  
IN  
DISTINCT  
ORDER BY  
DESC  
ASC  
LIMIT  
AS  
JOIN ON  
HAVING  

**SELECT**  
Selecting all data from table:   
> SELECT *  
> FROM *table_name*

Selecting with field names:  
> SELECT *column1*, *column2*, ...  
> FROM *table_name*

Selecting distinct values (only one value for each type):  
> SELECT DISTINCT *column1*, *column2*, ...  
> FROM *table_name*

**SELECT COUNT**  
*How many* records match? (e.g. how many items in a table)  
> SELECT COUNT (*column1*)  
> FROM *table_name*

or for all rows:  
> SELECT COUNT (*)  
> FROM *table_name*

Combine with DISTINCT:  
> SELECT COUNT (DISTINCT *column*)  
> FROM *table_name*

**Combining fields for calculations**  
> SELECT *column1* + *column2*  
> SELECT *column1* / 1.1  

**WHERE to narrow down selection**  
> SELECT *column1*, *column2*  
> FROM *table_name*  
> WHERE *condition*  

**TEXT**  
**single quotes! Postgres does not allow double quotes**
> WHERE customername = 'Brown'  
*to escape a single quote, use double quote: 'O"Brien'*  

**NUMERIC FIELDS (no quotes)**  
Use =, >, >=, < and <=  

**DATE FIELDS**  
**single quotes! syntax depends on location and sytem setup for dates**  
> WHERE orderdate = '2020-05-14'  
> WHERE orderdate > '2020-01-01'  

**LOGICAL OPERATORS: AND, OR, NOT**  
* Using AND with WHERE: all conditions must be true for a record to be selected
> WHERE *condition1* AND *condition2* AND *condition3* ...  
* Using OR with WHERE: one of the conditions must be true for a record to be selected
> WHERE *condition1* OR *condition2* OR *condition3* ...  
* Using OR with WHERE: a record will be selected if the condition(s) is not true
> WHERE NOT *condition*  
* Combining AND, OR and NOT with WHERE: *use parentheses to group!*  
> WHERE (*condition1* AND *condition2*) OR *condition3*  














