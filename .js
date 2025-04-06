// Greet the user on page load
window.addEventListener('load', () => {
    alert("Welcome to DerRo's AUTO MOBILE!");
});

// Handle search form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.querySelector('input[name="search"]').value.trim();
    if (query) {
        alert(`You searched for: ${query}`);
    } else {
        alert("Please enter something to search!");
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Section not found.");
        }
    });
});

// Handle broken images
document.querySelectorAll('img').forEach(img => {
    img.onerror = () => {
        img.alt = "Image not found";
        img.style.border = "2px solid red";
    };
});
