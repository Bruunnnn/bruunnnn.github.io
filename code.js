 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const flipCard = document.getElementById('flipCard');

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Ensure card is oriented correctly based on saved theme
    if (savedTheme === 'dark') {
        flipCard.classList.add('flipped');
    } else {
        flipCard.classList.remove('flipped');
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Flip the card
        flipCard.classList.toggle('flipped');

        // Apply theme + save preference
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Add click event listener to toggle button
    themeToggle.addEventListener('click', toggleTheme);



    const nasd = async () => {};

    async function fetchData() {} 

});