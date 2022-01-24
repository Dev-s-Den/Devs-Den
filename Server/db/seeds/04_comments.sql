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

When you include the ''='' the output of .each is printed in the HTML, in this case the array of posts.'),
('8','3', 'When you define attr_accessor :tweets, you just define 2 instance methods:
```
def tweets
  @tweets
end

def tweets=(tweets)
  @tweets = tweets
end
```
'),('8','7', 'When you call tweets inside the each method, you just call method with this name, not a local variable, so you should set @tweets in the initialize method because right now your @tweets variable is not set:
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
'),('9','3', '
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
' ),('9', '2', 'This could be done via CSS:
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
')