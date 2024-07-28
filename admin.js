document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsList = document.getElementById('postsList');
    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = `${post.title}: ${post.content}`;
        postsList.appendChild(li);
    });

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        posts.push({ title, content });
        localStorage.setItem('posts', JSON.stringify(posts));

        const li = document.createElement('li');
        li.textContent = `${title}: ${content}`;
        postsList.appendChild(li);
    });

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    });
});
