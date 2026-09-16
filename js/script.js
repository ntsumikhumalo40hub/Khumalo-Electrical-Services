// JavaScript for handling the enquiry form submission
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");
// Check that the enquiry form exists before adding functionality
if (enquiryForm) {
    // Listen for the user submitting the enquiry form
    enquiryForm.addEventListener("submit", function(event) {
        // Prevent the form from refreshing the page when submitted
        event.preventDefault();
// Display a confirmation message after the form is submitted
        formMessage.textContent =
            "Thank you for your enquiry. We will get back to you soon.";
// Clear all form fields after a successful submission
        enquiryForm.reset();
    });
}
// =========================================
// HAMBURGER MENU TOGGLE
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // =========================================
    // ENQUIRY FORM VALIDATION (Part 3 preview)
    // =========================================
    
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            if (!name) {
                alert('Please enter your name.');
                return;
            }
            
            alert('Thank you ' + name + '! Your enquiry has been received. We will contact you soon.');
            enquiryForm.reset();
        });
    }
});