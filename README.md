# Wemanity Kata

## Prerequisites
- NodeJS
- NPM
- Any web navigator

## Installing and Running

### Live
You can already access the API live on [Heroku](https://wemanity-kata.herokuapp.com/contacts/).

Navigate to `./client/` then run `npm install` then  `npm start` . You can now access the app on [localhost:4200/](http://localhost:4200/)


## API Endpoints

| Path            | Method | Description                                             |
|-----------------|--------|---------------------------------------------------------|
| /contacts       | GET    | Get all contacts                                        |
| /contacts       | POST   | Add a new contact                                       |
| /contacts       | PUT    |  Update a contact                                       |
| /contacts/:data | GET    | Get all contacts matching the name, last name or number |


## Missing
I did this Kata to practice Angular which I tried to learn by myself during the last days. It challenged me a lot on some points but it went well in the end. I tried to write it the "Angular way" and tried not to just transpose the React logic I used to know. 

I think it could be improved by creating more smaller components with more imbrication to help maintaining it. Unfortunately this is something I still have to practice in Angular (especially passing data from child to parent).

Files and folders name are not that clean as well but I found that Angular CLI was not able to rename components yet, and doing it by hand would make me create a lot of path mistakes. Next time I'll have to analyze and design my components architecture better.

## Built With
* Angular
* Express (nodeJS)
* MongoDB
* [Visual Studio Code](https://code.visualstudio.com/) 

## Authors

* **Matthieu Brouillard** - [brrrouillard](https://twitter.com/brrrouillard)
