## SQL keywords:
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
  SELECT *
  FROM *table_name*

Selecting with field names:
  SELECT *column1*, *column2*, ...
  FROM *table_name*

Selecting distinct values (only one value for each type):
  SELECT DISTINCT *column1*, *column2*, ...
  FROM *table_name*

**SELECT COUNT**
How many records match with a certain condition?

  SELECT COUNT *column1*
  FROM *table_name*

or for all rows:
  SELECT COUNT (*)
  FROM *table_name*

