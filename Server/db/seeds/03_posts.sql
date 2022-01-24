INSERT INTO posts (user_id, forum_id, content, img)
 VALUES ('1', '2', '```js
 function test () {
   for (let test of tests){
     Hello there mister}
 return too late mister
 }
 ```   
        ', 'https://i.imgur.com/fuOFQoH.png'),
        ('1', '1', 'How do I create a branch and checkout at the same time? ', 'https://i.imgur.com/fuOFQoH.png'), 
        ('3', '2', 'How did Jose Alex and Nico make this amazing app?', 'https://i.imgur.com/fuOFQoH.png'),
        ('2', '1', 'I Love Spagheti and meetballs? ', 'https://i.imgur.com/fuOFQoH.png'), 
        ('3', '1', 'What is the answer to life and the universe', 'https://i.imgur.com/fuOFQoH.png'), 


        ('3', '3','So my gemfile specifies ruby 2.6.3 and I used rbenv to install ruby 2.6.3. However, when I try to run rake db:create, it gives me an "Your Ruby version is 2.7.0, but your Gemfile specified 2.6.3" error. I even check my ruby version using ruby -v and it even tells me I have 2.6.3. Can someone explain why this is occurring?',''), 
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
What’s going on here?
','')