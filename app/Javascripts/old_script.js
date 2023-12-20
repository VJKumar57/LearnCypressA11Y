document.addEventListener('DOMContentLoaded', function() {
    // ... (existing code) ...

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    // ... (existing code) ...
});
