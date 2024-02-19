document.addEventListener('DOMContentLoaded', () => {
    // This event listener ensures that the script runs after the DOM is fully loaded

    // Get the job posting form by its ID
    const jobForm = document.getElementById('post-job-form');
    
    // Add an event listener to the job form to intercept the submit event
    if (jobForm) {
        jobForm.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevent the default form submission behavior
            alert('Job posted!');  // Show a placeholder alert for demonstration
            // Here you would include logic to actually handle the job posting,
            // such as sending the form data to a server or API
        });
    }

    // Get the contact form by its ID
    const contactForm = document.getElementById('contact-form');
    
    // Add an event listener to the contact form to intercept the submit event
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevent the default form submission behavior
            alert('Message sent!');  // Show a placeholder alert for demonstration
            // Here you would include logic to actually handle the contact message,
            // such as sending the form data to a server or API
        });
    }

    // You can add more JavaScript interactions below as needed
    // This could include event listeners for other forms, buttons, or dynamic elements
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Add your AJAX request or form submission logic here
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form after handling
        this.reset();
    });
});

