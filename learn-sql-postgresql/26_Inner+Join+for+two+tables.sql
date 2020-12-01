SELECT companyname,orderdate,shipcountry
FROM orders
JOIN customers ON customers.customerid=orders.customerid;

SELECT firstname,lastname,orderdate
FROM orders
JOIN employees ON employees.employeeid=orders.employeeid;

SELECT companyname,unitprice,unitsinstock
FROM products
JOIN suppliers ON products.supplierid=suppliers.supplierid;
