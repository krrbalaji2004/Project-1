// Sample user data (in a real application, this would be stored securely on a server)
const users = [
    {
        username: 'admin',
        password: 'admin',
        role: 'Administrator'
    },
    {
        username: 'user',
        password: 'user',
        role: 'User'
    }
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Check if user is already logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'index.html';
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Find user in the users array
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            role: user.role
        }));
        
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        messageDiv.style.color = '#dc3545';
        messageDiv.textContent = 'Invalid username or password!';
    }
}

// Event Listeners
loginForm.addEventListener('submit', handleLogin);

// Check authentication on page load
checkAuth(); 