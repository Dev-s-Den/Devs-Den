[![Repo Size](https://img.shields.io/github/repo-size/Dev-s-Den/Devs-Den?style=for-the-badge)]()
[![Code Size](https://img.shields.io/github/languages/code-size/Dev-s-Den/Devs-Den?style=for-the-badge)]()
[![Commit Activity](https://img.shields.io/github/commit-activity/w/Dev-s-Den/Devs-Den?style=for-the-badge)]()

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/Axios-A020F0?style=for-the-badge&logo=axios&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# Devs-Den

Social Media Platform for Web Developers and Software Engineers that provides various ways to communicate, learn and spread knowledge.

Dev's Den is designed to give users the best experience and tools to share ideas, resources and takle problems as a community.

## Functionality

### Home Page & Search-bar

![Home Page](./public/gif/homePageAndSearch.gif)
Home Page, displays the last current posts from every forum, and the searh bar can display from all the posts the ones that match your query

### Login & Sign Up

![Login/Signup](./public/gif/loginAndSignup.gif)
If you are already registered you can hit the login button, otherwise you can register by hitting the sign up link.

### Forum Navigation

![Forum Navigation](./public/gif/forumNavigation.gif)
Anyone is able to benefit from the community, and moving through forums is as simple as a click in the category.

### Limited Functionality for guests

![Limited Functionality For Guests](./public/gif/usersCantPostOrComment.gif)
If you dont have an account yet, hurry up and sign up you are missing out on sharing with the Devs Den community. And it will show when you try to comment or post.

### Chat

![Chat](./public/gif/chatFunctionality.gif)
As a registered user you can chat with fellow developers in realtime !!!!

### Upload Images

![Upload Images](./public/gif/uploadimages.gif)
Registered devs can upload images to show coding errors, or to share the issues they are facing.

### Markdown is accepted in posts and comments

![markdown](./public/gif/markdwon.gif)
Registered devs can share their code blocks by putting their content inside three back-ticks Example:
<br> \```<Language-shortcut (js)>
<br>Your code goes inside<br>
\```

### IDE Supporst Javascript at the moment

![IDE](./public/gif/javascriptIDE.gif)
Becasue we are a devs community we want the best tools for our devs, and we have included a functional javascript IDE that you can try code with to check if it is correct.

### Show Comments and Liking posts

![Likes and showing comments](./public/gif/showCommentsLikes.gif)
In order to show comments you just have to click on the little comment icon, to display the comments and if you want to like the posts you can give a thumbs up.

## Project Structure

- [Front-End](/Client)
  - [Components](/Client/src/components)
  - [Helper Functions](/Client/src/helpers)
  - [Styles](/Client/src/components/Styles)
- [Back-End](/Server)
  - [Database](/Server/db)
    - [Queries](/Server/db/queries)
    - [Schemas](/Server/db/schema)
    - [Seeds](/Server/db/seeds)
  - [API-Routes](/Server/routes)
