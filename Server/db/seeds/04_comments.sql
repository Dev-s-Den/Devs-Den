INSERT INTO comments (post_id, user_id, content)
 VALUES 
('1', '2', 'You are missing a semicolon
```sql
SELECT * FROM table;
```
'),
('2', '1', 'The SQL standard way
```sql
select column_name, data_type, character_maximum_length, column_default, is_nullable
from INFORMATION_SCHEMA.COLUMNS where table_name = <name of table>;
```
'),
('2', '3', 'Try this (in the `psql` command-line tool):
```sql
\d+ tablename
```
'),
('3', '2', 'Set the PGPASSWORD environment variable inside the script before calling psql
```sql
PGPASSWORD=pass1234 psql -U MyUsername myDatabaseName
```
'),
('3', '1', 'It is also convenient to have a ~/.pgpass file to avoid regularly having to type in passwords. See [Section 30.13](https://www.postgresql.org/docs/8.3/libpq-pgpass.html) for more information.

This file should contain lines of the following format:
```sql
hostname:port:database:username:password
```
The password field from the first line that matches the current connection parameters will be used.'),

('4', '2', 'Hmm interesting question'),
('4', '5', 'All current browsers have native JSON support built in. So as long as you''re not dealing with prehistoric browsers like IE6/7 you can do it just as easily as that:
```js
var j = {
  "name": "binchen"
};
console.log(JSON.stringify(j));
```
'),
('4', '1', 'Thanks Adveck'),


( '5', '4', 'I am having trouble with the same issue'), 
('5', '7', 'Quick simple solution:
```js
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
```
Basically, we iterate over the array and, for each element, check if the first position of this element in the array is equal to the current position. Obviously, these two positions are different for duplicate elements.
'),
('5', '8', 'Thanks you so much :)'),


('6', '2', 'Pleast post your code so we can see what your issue is'),
('6','6','Maybe this function will work for you:
```js
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}
```
'),

( '7', '7', 'You can do it as long as you only want index 0 of the category_name arrays. You simply use array destructuring at that level to assign a variable from that index. And that variable is inside another destructured object.
```js
documents = [{
  data: {
    category_name: [{
      text: "Title 1"
    }]
  }
}, {
  data: {
    category_name: [{
      text: "Title 2"
    }, {
      text: "Title 3"
    }]
  }
}];

const nav = documents.map(({
  data: {
    category_name: [{
      text: category_name
    }]
  }
}, index) => {
  console.log(index);
  return category_name;
});

console.log(nav);
```
'),

( '9', '9', 'The differences between a ```class``` and a ```struct``` in C++ is:

- ```struct``` members and base classes/structs are ```public``` by default.
- ```class``` members and base classes/struts are ```private``` by default.

Both classes and structs can have a mixture of ```public```, ```protected``` and ```private``` members, can use inheritance and can have member functions.

I would recommend you:

- use ```struct``` for plain-old-data structures without any class-like features;
- use ```class``` when you make use of features such as ```private``` or ```protected``` members, non-default constructors and operators, etc.
'),

( '10', '6', 'If you''re looking for a way of applying the "static" keyword to a class, like you can in C# for example, then you won''t be able to without using Managed C++.

But the looks of your sample, you just need to create a public static method on your BitParser object. Like so:

BitParser.h

```c++
class BitParser
{
 public:
  static bool getBitAt(int buffer, int bitIndex);

  // ...lots of great stuff

 private:
  // Disallow creating an instance of this object
  BitParser() {}
};
```
BitParser.cpp
```c++
bool BitParser::getBitAt(int buffer, int bitIndex)
{
  bool isBitSet = false;
  // .. determine if bit is set
  return isBitSet;
}
```
')
