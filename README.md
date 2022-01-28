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

# Summary

<b>Dev's Den</b> is a social media platform for software developers and software engineers to share coding knowledge, learn new things and tackle problems as a community

# Functionality

## Home Page & Search-bar

![Home Page](./public/gif/homePageAndSearch.gif)
Home Page, displays the last current posts from every forum, and the searh bar can display from all the posts the ones that match your query

For more user stories [click here](./public/UserStories.md)

# Project Structure

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

# Project Setup

- [Fork](https://github.com/Dev-s-Den/Devs-Den/fork) this repository and clone to your local device.
- Install dependencies with `npm install` in both [Server](/Server) and [Client](/Client).
- Make an ENV file for the back-end [.env.example](/Server/.env.example).
- Make an ENV file for the front-end [.env.example](/Client/.env.example).
- Build a database (psql preferrably) and change the information in the ENV file accordingly.
- Run the server using `cd Server`, `npm run local`.
- Run the application front-end using `cd Client`, `npm start`.

## Front-End

Additional documentation (React) [here](/Client/README.md).
