INSERT INTO comments (post_id, user_id, content)
 VALUES ('1', '2', 'I have no idea how to help you.'),
('1', '1', 'This is an amazing question but maybe someone with more expereince can help.'), 
('2', '3', 'No Way Jose will be able to help you with this'),
('6', '2', 'You are missing a semicolon
```sql
SELECT * FROM table;
```
'),
('7', '1', 'The SQL standard way
```sql
select column_name, data_type, character_maximum_length, column_default, is_nullable
from INFORMATION_SCHEMA.COLUMNS where table_name = <name of table>;
```
'),
('7', '3', 'Try this (in the `psql` command-line tool):
```sql
\d+ tablename
```
'),
('8', '2', 'Set the PGPASSWORD environment variable inside the script before calling psql
```sql
PGPASSWORD=pass1234 psql -U MyUsername myDatabaseName
```
'),
('8', '1', 'It is also convenient to have a ~/.pgpass file to avoid regularly having to type in passwords. See [Section 30.13](https://www.postgresql.org/docs/8.3/libpq-pgpass.html) for more information.

This file should contain lines of the following format:
```sql
hostname:port:database:username:password
```
The password field from the first line that matches the current connection parameters will be used.')

