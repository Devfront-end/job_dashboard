document.addEventListener('DOMContentLoaded', () => {
    // Handle the job posting form submission
    const jobForm = document.getElementById('post-job-form');
    if (jobForm) {
        jobForm.addEventListener('submit', handleJobFormSubmit);
    }

    // Handle the contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Initialize carousel functionality
    initCarousel();
});

function handleJobFormSubmit(event) {
    event.preventDefault();
    alert('Job posted!');
    // Additional job form handling logic...
}

function handleContactFormSubmit(event) {
    event.preventDefault();

    var name = document.getElementById('contact-name').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    // Reset the form after handling
    event.target.reset();
}

function initCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // Show the first slide
    slides[currentSlide].style.display = "block";

    // Setup event listeners for next/prev buttons
    document.querySelector(".next").addEventListener("click", () => {
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = "block";
    });

    document.querySelector(".prev").addEventListener("click", () => {
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].style.display = "block";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Here, you would handle the form submission (e.g., using AJAX to send data to the server)
        alert('Thank you for contacting us!');

        contactForm.reset(); // Reset the form after submission
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

