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