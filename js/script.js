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
// =========================================
// CONTACT FORM SUBMISSION
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value.trim();
            
            if (!name || !email || !subject || !message) {
                contactFormMessage.textContent = "Please fill in all required fields.";
                contactFormMessage.style.color = "red";
                return;
            }
            
            contactFormMessage.textContent = 
                "Thank you " + name + "! Your message has been sent. We will get back to you soon.";
            contactFormMessage.style.color = "green";
            
            contactForm.reset();
        });
    }
});
// =========================================
// ACCORDION FUNCTIONALITY
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all other items (optional - remove for multi-open)
            document.querySelectorAll('.accordion-item').forEach(function(otherItem) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
// =========================================
// GALLERY LIGHTBOX
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    if (galleryImages.length > 0) {
        // Create lightbox HTML
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        `;
        document.body.appendChild(lightbox);
        
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        
        // Open lightbox when image is clicked
        galleryImages.forEach(function(img) {
            img.addEventListener('click', function() {
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                lightboxCaption.textContent = this.getAttribute('data-caption') || this.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        lightboxClose.addEventListener('click', closeLightbox);
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});