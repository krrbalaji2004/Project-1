// Get user info from localStorage
const currentUser = localStorage.getItem('currentUser');
const userInfoSpan = document.getElementById('userInfo');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user is logged in
if (!currentUser) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
} else {
    // Parse user data and display username
    const user = JSON.parse(currentUser);
    userInfoSpan.textContent = `Logged in as: ${user.username} (${user.role})`;
}

// Handle logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Clear user info from localStorage
        localStorage.removeItem('currentUser');
        // Redirect to login page
        window.location.href = 'login.html';
    });
}

// --- Existing code from index.html (place other script logic here) ---
// Example: code for search, adding books, displaying books, etc.

// Example: Handle the search functionality (assuming search input and button exist)
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        console.log(`Searching for: ${searchTerm}`);
        // Add your search logic here
    });
}

// Example: Handle the add book form submission
const addBookForm = document.getElementById('addBookForm');

if (addBookForm) {
    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('bookTitle').value;
        const bookAuthor = document.getElementById('bookAuthor').value;
        const bookCategory = document.getElementById('bookCategory').value;
        const bookQuantity = parseInt(document.getElementById('bookQuantity').value, 10);

        const newBook = {
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory,
            quantity: bookQuantity
        };

        console.log('New book added:', newBook);
        // Add logic to add the book to your list or database
        addBookForm.reset(); // Clear the form
    });
}

// Example: Function to display books (you'll need to fetch your book data)
function displayBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;

    booksGrid.innerHTML = ''; // Clear current books

    if (books && books.length > 0) {
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-item');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
                <p>Available: ${book.quantity}</p>
            `;
            booksGrid.appendChild(bookElement);
        });
    } else {
        booksGrid.innerHTML = '<p>No books available.</p>';
    }
}

// Example: Call displayBooks with some dummy data on page load
displayBooks([
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', quantity: 5 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance', quantity: 3 }
]); 