
# Thought Organizer

This is a simple organizer app for the thoughts and ideas you want to save for later and not lose them forever.

This is particularly useful to me because sometimes I go in multiple meetings one after another and often times I don't have time to write all of them down.

This app was made in a little bit more than a day as a challenge.

Stack: NodeJS, Nullstack, MongoDB


## Glossary

Title: A synthesis of the idea

Theme: Kind of a "box" you can mark multiple ideas in. For example, I can save multiple ideas for a specific client. I can simply set the theme to "Client A"

Due date: The deadline (if there is one) you have to think or research about some idea.

* Title is mandatory, unlike Theme and Due date.
## Screens

Home page
![Screen 1](https://i.imgur.com/ecb8ydQ.png)]

Creating a new thought
![Screen 2](https://i.imgur.com/oYusVn1.png)]

List of all thoughts, you can sort your thoughts in a few ways
![Screen 3](https://i.imgur.com/UmzYgrT.png)]

But the best one in my opinion is "upcoming". It will list only future tasks and order by how close to today they are
![Screen 4](https://i.imgur.com/DgXVFMe.png)]

You can click on a specific thought to edit it or add insight/detail
![Screen 5](https://i.imgur.com/emk29Hb.png)]


## Nullstack

This web app was made using [Nullstack](https://nullstack.app) by Christian Mortaro.
## Installation

Clone the repository, navigate to its directory, then run

```bash
  npm install
```

For development, run

```bash
  npm run start
```

For production, run

```bash
  npm run build
  npm run prod
```

Don't forget to setup your environment variables!
## Environment Variables

Create a '.env' file at the root directory of your project and set up these configurations

`NULLSTACK_SERVER_PORT=` Set this value to whatever port you want

`NULLSTACK_SECRETS_MONGODB_URL=` This is your MongoDB connection string

