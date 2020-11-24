**Basic syntax**  
> psql --port=5432 --host=localhost --dbname=*nameDbase* --username=postgres

**or**  
> psql -p 5432 -h localhost -d *nameDbase* -U postgres

When you hit return, you will be asked for your password.  
If password is accepted, the next line will show you the database you are connected to.

**Find configuration with pgAdmin**  
* open pgAdmin
* right-click on PostgreSQL database
* click on *properties*
* choose *connection* in the popup screen
* it will show *host*, *port* and *username*


