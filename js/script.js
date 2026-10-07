// =========================================
// ENQUIRY FORM - AJAX-style submission
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const enquiryForm = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');
    
    if (enquiryForm && formMessage) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Client-side validation
            if (!name || !email || !phone || !service || !message) {
                showFormStatus(formMessage, 'Please fill in all required fields.', 'error');
                return;
            }
            
            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus(formMessage, 'Please enter a valid email address.', 'error');
                return;
            }
            
            // Phone validation (South African format - at least 10 digits)
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                showFormStatus(formMessage, 'Please enter a valid phone number (at least 10 digits).', 'error');
                return;
            }
            
            // Get submit button
            const submitBtn = enquiryForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
            showFormStatus(formMessage, 'Sending your enquiry...', 'loading');
            
            // Simulate AJAX submission (in real world, this would be a fetch() to a server)
            setTimeout(function() {
                // Success state
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                showFormStatus(
                    formMessage, 
                    'Thank you ' + name + '! Your enquiry has been received. We will contact you within 24 hours.', 
                    'success'
                );
                
                // Reset form
                enquiryForm.reset();
                
                // Auto-hide message after 8 seconds
                setTimeout(function() {
                    formMessage.classList.remove('show');
                }, 8000);
                
            }, 1500); // Simulate 1.5 second network delay
        });
    }
    
    // =========================================
    // CONTACT FORM - AJAX-style submission
    // =========================================
    
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');
    
    if (contactForm && contactFormMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                showFormStatus(contactFormMessage, 'Please fill in all required fields.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus(contactFormMessage, 'Please enter a valid email address.', 'error');
                return;
            }
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
            showFormStatus(contactFormMessage, 'Sending your message...', 'loading');
            
            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                showFormStatus(
                    contactFormMessage, 
                    'Thank you ' + name + '! Your message has been sent. We will get back to you soon.', 
                    'success'
                );
                
                contactForm.reset();
                
                setTimeout(function() {
                    contactFormMessage.classList.remove('show');
                }, 8000);
                
            }, 1500);
        });
    }
    
    // =========================================
    // Helper function - show form status
    // =========================================
    
    function showFormStatus(element, message, type) {
        element.textContent = message;
        element.className = 'form-status show ' + type;
    }
});
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
// =========================================
// SEARCH FUNCTIONALITY FOR SERVICES
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById('serviceSearch');
    const searchResults = document.getElementById('searchResults');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (searchInput && accordionItems.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            let visibleCount = 0;
            
            accordionItems.forEach(function(item) {
                const headerText = item.querySelector('.accordion-header').textContent.toLowerCase();
                const contentText = item.querySelector('.accordion-content').textContent.toLowerCase();
                
                const matches = headerText.includes(searchTerm) || contentText.includes(searchTerm);
                
                if (searchTerm === '' || matches) {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            // Show results message
            if (searchTerm === '') {
                searchResults.textContent = '';
                searchResults.classList.remove('no-results');
            } else if (visibleCount === 0) {
                searchResults.textContent = 'No services match your search.';
                searchResults.classList.add('no-results');
            } else if (visibleCount === 1) {
                searchResults.textContent = '1 service found.';
                searchResults.classList.remove('no-results');
            } else {
                searchResults.textContent = visibleCount + ' services found.';
                searchResults.classList.remove('no-results');
            }
        });
    }
});