module.exports = function postDetails(post) {
    const htmlVar = `
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
      <header><img src="/logo.png" />WIZARD NEWS PostId: ${post.id}</header>
        <div class="news-item">
          <p>
            TITLE: ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p class="big">${post.content}</p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>
        </div>
    </body>
    
    </html>`;
  
    return htmlVar;
};