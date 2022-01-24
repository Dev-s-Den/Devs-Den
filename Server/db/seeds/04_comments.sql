INSERT INTO comments (post_id, user_id, content)
 VALUES ('1', '2', 'I have no idea how to help you.'),
        ( '1', '1', 'This is an amazing question but maybe someone with more expereince can help.'), 
        ( '2', '3', 'No Way Jose will be able to help you with this'),
        ('6', '4', 'what does your .ruby-version file say?'),
        ('6', '5', 'What''s in your .bashrc or .zshrc? Do you have eval "$(rbenv init - zsh)" in it? Have you run rbenv rehash yet? What happens when you run "which ruby"?'),
        ('6', '2','"which ruby" should return "/path/to/home/.rbenv/shims/ruby'),
        ('7', '1','```
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
'),('7', '3','0

Change ```<%= @posts.each do |post| %>``` for ```<% @posts.each do |post| %>```, note the missing ''='' in the second snippet.

When you include the ''='' the output of .each is printed in the HTML, in this case the array of posts.')