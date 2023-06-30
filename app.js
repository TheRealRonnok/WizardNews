const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static("public"));

const postBank = require("./postBank");
const postList = require("./public/views/postList");
const postDetails = require("./public/views/postDetails");

// GET request for Unique ID Posts
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);

  if (!post.id) {
    res.status(404).send("<h1>The Post ID is not recognized.</h1>");
  }

  res.send(postDetails(post));
});

// GET request for users/name
app.get("/users/:name", (req, res) => {
  const name = req.params.name;
  const post = postBank.findName(name);

  if (!post.name) {
    res.status(404).send("<h1>The name you entered does not match any entries in the list.</h1>");
  }
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  
  <body>
  <div class="news-list">
    <header><img src="/logo.png" />WIZARD NEWS Name: ${post.name}</header>
      <div class="news-item">
        <p class="big">
          TITLE ${post.title}
        </p>
        <p class="big">${post.content}</p>
      </div>
  </div>
  </body>
  
  </html>`;

  res.send(html);
});

// GET request for all posts
app.get("/posts", (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

// GET request for homepage
app.get("/", (req, res, next) => {
  next(
    res.send(
      "<h1>Please choose one of these three routes:</h1><h2>/posts</h2><h2>/posts/id#</h2><h2>/users/name</h2>"
    )
  );
});

// Default page for unknown routes
app.all("*", (req, res) => {
  res.status(404).send("<h1>Error 404! Page not found.</h1>");
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
