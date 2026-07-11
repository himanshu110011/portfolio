document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CUSTOM LOADER SCREEN
       ========================================================================== */
    const loader = document.getElementById('loader');
    
    // Hide loader when page finishes loading
    window.addEventListener('load', () => {
        // Wait a slight fraction for the animation to look complete
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
            }
        }, 800);
    });

    // Fallback: hide loader anyway if it takes too long (e.g., 3 seconds)
    setTimeout(() => {
        if (loader && !loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
        }
    }, 3000);


    /* ==========================================================================
       2. LIGHT/DARK THEME SWITCHER
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            // Save state to local storage
            if (document.body.classList.contains('light-theme')) {
                localStorage.setItem('portfolio-theme', 'light');
            } else {
                localStorage.setItem('portfolio-theme', 'dark');
            }
        });
    }


    /* ==========================================================================
       3. MOBILE HAMBURGER MENU DRAWER
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('lock-scroll');
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('lock-scroll');
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking any navigation link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside the navbar drawer
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }


    /* ==========================================================================
       4. HERO TYPING ANIMATION
       ========================================================================== */
    const typingTextEl = document.getElementById('typing-text');
    const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Creative Programmer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        if (!typingTextEl) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove character
            typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            // Add character
            typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Natural typing speed
        }

        // Handle states transition
        if (!isDeleting && charIndex === currentRole.length) {
            // Full word typed, pause before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Word deleted, move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Small delay before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect
    typeEffect();


    /* ==========================================================================
       5. ABOUT TABS INTERACTIVITY
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Deactivate all buttons
            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            // Hide all panels
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate current button
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            // Show corresponding panel
            const panelId = btn.getAttribute('aria-controls');
            const targetPanel = document.getElementById(panelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });


    /* ==========================================================================
       6. MORE ABOUT ME SHOW/HIDE TOGGLE
       ========================================================================== */
    const toggleStoryBtn = document.getElementById('toggle-story-btn');
    const expandedStory = document.getElementById('expanded-story');

    if (toggleStoryBtn && expandedStory) {
        toggleStoryBtn.addEventListener('click', () => {
            const isShown = expandedStory.classList.contains('show');
            
            if (isShown) {
                expandedStory.classList.remove('show');
                toggleStoryBtn.innerHTML = 'Read More About Me <i class="fa-solid fa-chevron-down"></i>';
            } else {
                expandedStory.classList.add('show');
                toggleStoryBtn.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
            }
        });
    }


    /* ==========================================================================
       7. ANIMATED SKILL BARS
       ========================================================================== */
    const skillsSection = document.getElementById('skills');
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    const percentageLabels = document.querySelectorAll('.skill-percentage');

    function animatePercentageText(label, targetVal) {
        let currentVal = 0;
        const duration = 1200; // ms (must match or be less than CSS progress fill transition)
        const increment = targetVal / (duration / 16); // ~60fps
        
        const counterInterval = setInterval(() => {
            currentVal += increment;
            if (currentVal >= targetVal) {
                label.textContent = `${targetVal}%`;
                clearInterval(counterInterval);
            } else {
                label.textContent = `${Math.floor(currentVal)}%`;
            }
        }, 16);
    }

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate bars and numbers
                progressFills.forEach(fill => {
                    const widthVal = fill.getAttribute('data-progress');
                    fill.style.width = widthVal;
                });

                percentageLabels.forEach(label => {
                    const targetVal = parseInt(label.getAttribute('data-val'), 10);
                    animatePercentageText(label, targetVal);
                });

                // Unobserve since we only want to run it once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }


    /* ==========================================================================
       8. PROJECTS FILTERING
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Add animate fade-out effect first
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hidden-filter');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.classList.add('hidden-filter');
                    }
                }, 300);
            });
        });
    });


    /* ==========================================================================
       9. CONTACT FORM VALIDATION & MODAL
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    // Form Input References
    const formInputs = {
        name: {
            el: document.getElementById('form-name'),
            error: document.getElementById('error-name'),
            validate: (val) => val.trim().length >= 2
        },
        email: {
            el: document.getElementById('form-email'),
            error: document.getElementById('error-email'),
            validate: (val) => {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(val.trim());
            }
        },
        subject: {
            el: document.getElementById('form-subject'),
            error: document.getElementById('error-subject'),
            validate: (val) => val.trim().length > 0
        },
        message: {
            el: document.getElementById('form-message'),
            error: document.getElementById('error-message'),
            validate: (val) => val.trim().length >= 10
        }
    };

    function validateField(fieldName) {
        const field = formInputs[fieldName];
        const val = field.el.value;
        const group = field.el.parentElement;
        
        if (field.validate(val)) {
            group.classList.remove('invalid');
            group.classList.add('valid');
            return true;
        } else {
            group.classList.remove('valid');
            group.classList.add('invalid');
            return false;
        }
    }

    // Attach real-time input listeners
    Object.keys(formInputs).forEach(key => {
        const inputObj = formInputs[key];
        inputObj.el.addEventListener('input', () => {
            // Remove general classes if user clears input completely, otherwise validate
            if (inputObj.el.value.trim() === '') {
                inputObj.el.parentElement.classList.remove('valid', 'invalid');
            } else {
                validateField(key);
            }
        });

        inputObj.el.addEventListener('blur', () => {
            validateField(key);
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            
            // Validate all fields on submit
            Object.keys(formInputs).forEach(key => {
                const isValid = validateField(key);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Successful submission!
                // Clear validation classes
                Object.keys(formInputs).forEach(key => {
                    const group = formInputs[key].el.parentElement;
                    group.classList.remove('valid', 'invalid');
                });
                
                // Show Success Modal
                successModal.classList.add('active');
                
                // Reset Form
                contactForm.reset();
            }
        });
    }

    // Close success modal actions
    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
        
        // Also close by clicking outside the modal card
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }


    /* ==========================================================================
       10. "HIRE ME" MODAL & DIRECT ACTIONS
       ========================================================================== */
    const heroHireBtn = document.getElementById('hero-hire-btn');
    const hireModal = document.getElementById('hire-modal');
    const closeHireModalBtn = document.getElementById('close-hire-modal-btn');
    const hireModalContactBtn = document.getElementById('hire-modal-contact-btn');

    function openHireModal() {
        if (hireModal) {
            hireModal.classList.add('active');
        }
    }

    function closeHireModal() {
        if (hireModal) {
            hireModal.classList.remove('active');
        }
    }

    if (heroHireBtn) {
        heroHireBtn.addEventListener('click', openHireModal);
    }
    if (closeHireModalBtn) {
        closeHireModalBtn.addEventListener('click', closeHireModal);
    }
    if (hireModal) {
        hireModal.addEventListener('click', (e) => {
            if (e.target === hireModal) {
                closeHireModal();
            }
        });
    }
    if (hireModalContactBtn) {
        hireModalContactBtn.addEventListener('click', () => {
            closeHireModal();
            // Scroll smoothly to contact section
            const contactSec = document.getElementById('contact');
            if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    /* ==========================================================================
       11. ACTIVE NAVIGATION SCROLL LINK HIGHLIGHT
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            // Subtract header height for precision offset trigger
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);


    /* ==========================================================================
       12. SCROLL TO TOP BUTTON
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scroll-to-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
