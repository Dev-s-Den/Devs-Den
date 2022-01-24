INSERT INTO posts (user_id, forum_id, content, img)
 VALUES 
  ('1', '7', 'I tried selecting everything in a table but did not work
  ```sql
  SELECT * FROM table
  ```
  Can someone help?', null),
  ('2', '7', 'How do you perform the equivalent of Oracles `DESCRIBE TABLE` in PostgreSQL (using the psql command)?', null),
  ('3', '7', 'I am trying to automate database creation process with a shell script and one thing I have hit a road block with passing a password to psql. Here is a bit of code from the shell script:
  ```sql
  psql -U $DB_USER -h localhost -c"$DB_RECREATE_SQL"
  ```
  How do I pass a password to `psql` in a non-interactive way?', null),
(
'1', '1', 'If I defined an object in JS with:
```js
var j={"name":"binchen"};
```
How can I convert the object to JSON? The output string should be:
```js
var j={"name":"binchen"};
```
', null
),

('8', '1', 'I have a very simple JavaScript array that may or may not contain duplicates.
```js
var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
```
I need to remove the duplicates and put the unique values in a new array.
', null), 

('3', '1', 'Does anyone have a quick solution to generate a random strings of specified length in js? I am having issues with my solution method', null),

('2', '1', 'I have an array of objects and I want to .map() over the array while destructuring elements. Is there a way to achive it?

I currently have: 
```js
const nav = documents.map((category, index) => {
        const categoryName = category.data.category_name[0].text;
        console.log(index);
        return categoryName;
    });
```
I would like to achieve
```js
const nav = documents.map((*destructure here so I get .text property*, index) => {
        const categoryName = category.data.category_name[0].text;
        console.log(index);
        return categoryName;
    });
```
', null),

('5', '2', 'Hi everyone I am working on some really tough c++ problems. If anyone is interested in getting together and doing some peer programming shoot me a direct message.'
, null),
('6', '2', 'In what scenarios is it better to use a ```struct``` vs a ```class``` in C++?'
, null),
('3', '2', 'How do you create a static class in C++? I should be able to do something like:
```c++
cout << "bit 5 is " << BitParser::getBitAt(buffer, 5) << endl;
```
Assuming I created the ```BitParser``` class. What would the ```BitParser``` class definition look like?
'
, null)



