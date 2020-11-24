## Using PostgreSQL

**Find configuration with pgAdmin**  
* open pgAdmin
* right-click on PostgreSQL database
* click on *properties*
* choose *connection* in the popup screen
* it will show *host*, *port* and *username*  

**Basic syntax**  
> psql --port=5432 --host=localhost --dbname=*nameDbase* --username=postgres  

**or**  
> psql -p 5432 -h localhost -d *nameDbase* -U postgres  

When you hit return, you will be asked for your password.  
If password is accepted, the next line will show you the database you are connected to.

**Shortcut for connection**  
You can override with the command  
> psql -d *nameDbase*  

Other ways to avoid typing all the connection parameters are:  
* using environment variables using export PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, and set these for the connection
* create a .pgpass file in the home directory with hostname:port:database:username:password (example: localhost:5432:*nameDbase*:postgres;*password*)
* if you use **multiple databases** you can set up a .pg_service.conf file that contains multiple settings:  
> [service_name]  
> host=localhost  
> port=5432  
> dbname=nameDbase*  
> user=postgres  
> password=*password*    
To connect, use:  
> psql service=service_name *OR* export PGSERVICE=service-name  

### Command line for PostgreSQL
**Use the same database keywords for SQL on the command line as in pgAdmin**  

To **stop** run: <q>
To **quit** programme: <\q>  
To check **version**: <psql -V>  
To **create** database: <createdb NAME_DB>  
To **connect** to database: <psql NAME_DB>  
To **execute** SQL code in file: <psql -d EXAMPLE_DATABASE -f exampleFile.sql>  
To see **list** of databases: <\l>  
To **clear** terminal: <\! clear>  
To connect to **other** database: <\c *database*>  








