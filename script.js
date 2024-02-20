document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const signInModal = document.getElementById('signInModal');
    const logInModal = document.getElementById('logInModal');
  
    // Buttons to open the modals
    const signInBtn = document.getElementById('signInIcon');
    const logInBtn = document.getElementById('logInIcon');
  
    // Close buttons within the modals
    const closeButtons = document.querySelectorAll('.modal .close');
  
    // Function to toggle modal display
    function toggleModal(modal, show) {
      if (modal) {
        modal.style.display = show ? 'block' : 'none';
      }
    }
  
    // Open modals
    if (signInBtn) {
      signInBtn.addEventListener('click', () => toggleModal(signInModal, true));
    }
  
    if (logInBtn) {
      logInBtn.addEventListener('click', () => toggleModal(logInModal, true));
    }
  
    // Close modals with close button
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        toggleModal(modal, false);
      });
    });
  
    // Close modals when clicking outside of the modal content
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        toggleModal(event.target, false);
      }
    });
  
    // Form submission handling
    const signInForm = document.getElementById('signInForm');
    const logInForm = document.getElementById('logInForm');
  
    if (signInForm) {
      signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement your sign in logic here
      });
    }
  
    if (logInForm) {
      logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement your log in logic here
      });
    }
  });