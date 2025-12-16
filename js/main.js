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

// Web3Forms AJAX submission with success message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const formMessage = document.getElementById('formMessage');
        
        // Disable button while submitting
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                formMessage.innerHTML = '<div class="alert alert-success">Thank you for your message! I will get back to you soon.</div>';
                this.reset();
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Something went wrong. Please try again.</div>';
            }
        } catch (error) {
            formMessage.innerHTML = '<div class="alert alert-danger">Something went wrong. Please try again.</div>';
        }
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
}

// Fade-in animation for sections
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

// Initial check for elements in view
fadeInOnScroll();

// Check for elements in view on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Add fade-in class to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}); 