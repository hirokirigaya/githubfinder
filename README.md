# Github Finder

Every project and layout made by me, it aims to locate the user's profile, consuming the github api.

## Table of contents
- [Screenshots](#screenshots)
- [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I improved](#what-i-improved)
- [How Clip Repository](#how-do-you-clip-repository)
___
### Screenshots

![desktop](https://i.imgur.com/yWIiUzs.png)
![desktop-light](https://i.imgur.com/g1mqphw.png)
![user](https://i.imgur.com/EvADxvP.png)
![user-not-exist](https://i.imgur.com/CVfBWDi.png)

___
### Links 

- Page: [Click-me](https://githubfinder-five.vercel.app/)
- Figma: [Click-me](https://www.figma.com/file/2iR2ZvacKBEQDf2Bdkb6u3/Untitled?node-id=0%3A1)
- Repository: [Click-me](https://github.com/hirokirigaya/githubfinder)
- Linkedin: [Click-me](https://www.linkedin.com/in/daniel-junio-0832481bb/)
___
### My Process
  First im made all layout in figma, after i started in visual code, using layout mobile first.
### Built with

- Semantic HTML5
- CSS
- FlexBox
- Mobile First
- React JS - Library

### What I improved?

Data consumption of an api, axios, componentization, content api, props, below there are some examples:

```js

const Api = axios.create(
  {
    baseURL: "https://api.github.com/users"
  }
)

```
### How do you clip repository

```
git clone https://github.com/hirokirigaya/githubfinder

cd githubfinder

npm install or yarn

npm start / yarn run

```
