// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Basic form submission alert
// Since we are using a mailto: action, this just provides feedback to the user before their email client opens.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        // We don't preventDefault() here because we want the mailto: link to trigger
        console.log("Form preparation complete. Opening default email client...");
    });
}