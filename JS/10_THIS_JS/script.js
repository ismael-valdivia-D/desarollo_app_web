// Login/Logout toggle
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
if (loginBtn.textContent === 'Login') {
    loginBtn.textContent = 'Logout';
} else {
    loginBtn.textContent = 'Login';
}
});

// Like button functionality
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
button.addEventListener('click', function () {
    let likes = parseInt(button.getAttribute('data-likes'), 10);
    likes++;
    button.setAttribute('data-likes', likes);
    button.textContent = `${likes} likes`;
});
});

// Remove Add Definition button when clicked
const addDefBtn = document.getElementById('addDefBtn');
addDefBtn.addEventListener('click', function () {
addDefBtn.remove();
});