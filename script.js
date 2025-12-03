// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
        target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
        }
        });
        });

        // Simple scroll animation for skill cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

// Observe skill cards for fade-in animation
document.querySelectorAll('.skill-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
        });



// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if user had a preference saved
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Change button icon
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
});