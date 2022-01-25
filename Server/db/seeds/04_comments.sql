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


('6', '2', 'Please post your code so we can see what your issue is'),
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
makeid(10)
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
'), 
('11', '4', 'what does your .ruby-version file say?'),
('11', '5', 'What''s in your .bashrc or .zshrc? Do you have eval "$(rbenv init - zsh)" in it? Have you run rbenv rehash yet? What happens when you run "which ruby"?'),
('11', '2','"which ruby" should return "/path/to/home/.rbenv/shims/ruby'),
('12', '1','```
   <% @posts.each do |post| %>
  <div class="card p-3">
    <small class="mb-2">
       <strong><%= link_to "s\\" + post.sub.name, sub_path(post.sub) %>
         </strong> Posted by <%= link_to "u\\" 
         + post.user.username, profile_path(post.user.username) %> 
         <%= time_ago_in_words post.created_at %> ago</small>
      <h4>
        <%= link_to post.title, sub_post_path(post.sub, post) %>
      </h4>
    <p>
      <%= truncate post.body, length: 200 %>
    </p>
  </div>
<% end %>  
```
This can be somewhat hard to grasp but remeber that any plaintext in a template is written directly to the buffer - using each just does it n number of times.
'),
('12', '3','0

Change ```<%= @posts.each do |post| %>``` for ```<% @posts.each do |post| %>```, note the missing ''='' in the second snippet.

When you include the ''='' the output of .each is printed in the HTML, in this case the array of posts.'),
('13','3', 'When you define attr_accessor :tweets, you just define 2 instance methods:
```
def tweets
  @tweets
end

def tweets=(tweets)
  @tweets = tweets
end
```
'),
('13','7', 'When you call tweets inside the each method, you just call method with this name, not a local variable, so you should set @tweets in the initialize method because right now your @tweets variable is not set:
```
class Timeline
  attr_accessor :tweets # this is just a nice syntax for instance variable setter 
                        # and getter

  def initialize(tweets)
    @tweets = tweets
  end 

  def each(&block)  # Block into the proc
    tweets.each(&block) # proc back into the block 
  end
end
```
'),
('14','3', '
You can add some fonts via Google Web Fonts.

Technically, the fonts are hosted at Google and you link them in the HTML header. Then, you can use them freely in CSS with @font-face (read about it).

For example:

In the <head> section:
```
<link href='' http://fonts.googleapis.com/css?family=Droid+Sans'' 
rel=''stylesheet'' type=''text/css''> 
```
Then in CSS:
```
h1 { font-family: ''Droid Sans'', arial, serif; }
```
' ),
('14', '2', 'This could be done via CSS:
```
<style type="text/css">
@font-face {
    font-family: "My Custom Font";
    src: url(http://www.example.org/mycustomfont.ttf) format("truetype");
}
p.customfont { 
    font-family: "My Custom Font", Verdana, Tahoma;
}
</style>
<p class="customfont">Hello world!</p>
```
'),
('15', '1', 'Just use an *ngIf:
```
<td pEditableColumn style="width: 70px; word-wrap: break-word;">
  <select class="form-control-sm" [disabled]="searchBeanRes.rowAllSelect" [(ngModel)]="rowData.assignToAllTaskType" [(ngModel)]="rowData.taskTypeName" (click)="taskAssign(rowData,rowData.taskTypeName)">
     <option [value]="null">--Select--</option>
     <option *ngFor="let object of rowData.taskListMap | keyvalue" [ngValue]="object.value"> {{object.value}}</option>
  </select>

  <ng-container *ngIf="value == ''H2''">
    <input name="extra" [(ngModel)]="extraVariable">
  </ng-container>
</td>
```'),
('16','3','Answer In Simple Words:
The short answer is that HTML is desperate to please and will accept basically anything you give it. HTML is built around intentionally ignoring malformed input.'),
('16', '1', 'The browser is trying to convert chucknorris into hex colour code, because it’s not a valid value.
In chucknorris, everything except c is not a valid hex value.
So it gets converted to c00c00000000.
Which becomes #c00000, a shade of red.'),
('16', '2', 'chucknorris starts with c, and the browser reads it into a hexadecimal value.
Because A, B, C, D, E, and F are characters in hexadecimal.
The browser converts chucknorris to a hexadecimal value, C00C00000000.
Then the C00C00000000 hexadecimal value is converted to RGB format (divided by 3):
C00C00000000 ⇒ R:C00C, G:0000, B:0000
The browser needs only two digits to indicate the colour:
R:C00C, G:0000, B:0000 ⇒ R:C0, G:00, B:00 ⇒ C00000
Finally, show bgcolor = C00000 in the web browser.')
