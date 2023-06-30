module.exports = function postList(posts) {
    const htmlVar = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wizard News</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="news-list">
        <header><img src="/logo.png"/>WIZARD NEWS Posts</header>
        ${posts.map((post) => `
        <div class='news-item'>
            <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
            </small>
        </div>`
        ).join("")}
    </div>
    </body>
    </html>`;

    return htmlVar;
};