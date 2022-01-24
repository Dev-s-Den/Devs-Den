INSERT INTO posts (user_id, forum_id, content, img, likes)
 VALUES 
  ('1', '7', 'I tried selecting everything in a table but did not work
  ```sql
  SELECT * FROM table
  ```
  Can someone help?', null, 2),
  ('2', '7', 'How do you perform the equivalent of Oracles `DESCRIBE TABLE` in PostgreSQL (using the psql command)?', null, 4),
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
, null), ('3', '3','So my gemfile specifies ruby 2.6.3 and I used rbenv to install ruby 2.6.3. However, when I try to run rake db:create, it gives me an "Your Ruby version is 2.7.0, but your Gemfile specified 2.6.3" error. I even check my ruby version using ruby -v and it even tells me I have 2.6.3. Can someone explain why this is occurring?',''), 
('4', '3', 'I''m not really sure how to quote this question, but I''m making a clone of Reddit in Ruby on Rails.

On the index page I am displaying all of the posts I have in the table "Posts". But when I display them all, at the end of the last post a text shows up which is wrapped in square brackets and contains all of the information from the table. I just want to know how to remove this text.
       
```
        <%= @posts.each do |post| %>
       <div class="card p-3">
       <small class="mb-2">
       <strong>
         <%= link_to "s\\" + post.sub.name, sub_path(post.sub) %>
         </strong> Posted by 
           <%= link_to "u\\" + post.user.username, 
           profile_path(post.user.username) %>
         <%= time_ago_in_words post.created_at %> ago</small>
         <h4><%= link_to post.title, sub_post_path(post.sub, post) %></h4>
         <p><%= truncate post.body, length: 200 %></p>
       </div>
       <% end %> 
```
          ',''), ('1', '3', 'I am a ruby beginner. I am using proc class but I am getting an error.
```
class Timeline
    attr_accessor :tweets

    def each(&block)  # Block into the proc
        tweets.each(&block) # proc back into the block 
    end
end
timeline = Timeline.new(tweets)
timeline.each do |tweet|
    puts tweet
end
````
can ayone help?', ''),
('9', '4', 'Is there a way to add some custom font on a website without using images, Flash or some other graphics?
For example, I was working on a wedding website, and I found a lot of nice fonts for that subject. But I can''t find the right way to add that font on the server. And how do I include that font with CSS into the HTML? Is this possible to do without graphics?',''),('8', '4', 'I am trying to dynamically create a new input field based on user input. Please see example it will make more sense.
If the user selects ''HS2'', I want to create a new input field upon selecting that value. If the user were to select HS2, but change to (for example) HS1, I would want to remove that input field because it should only be present once its selected. This should be in realtime and NOT after the user clicks submit. Here is my current code:
```
<td pEditableColumn style="width: 70px; word-wrap: break-word;">
  <select class="form-control-sm" [disabled]="searchBeanRes.rowAllSelect" [(ngModel)]="rowData.assignToAllTaskType" [(ngModel)]="rowData.taskTypeName" (click)="taskAssign(rowData,rowData.taskTypeName)">
     <option [value]="null">--Select--</option>
     <option *ngFor="let object of rowData.taskListMap | keyvalue" [ngValue]="object.value"> {{object.value}}</option>
  </select>
</td>
```', ''),('5', '4', 'Why do certain random strings produce colors when entered as background colors in HTML?
For example:
```
<body bgcolor="chucknorris"> test </body>
```
...produces a document with a red background across all browsers and platforms.
On the other hand, chucknorr produces a yellow background!
What''s going on here?
','')